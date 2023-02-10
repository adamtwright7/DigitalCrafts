import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";
const supabaseKey = import.meta.env.VITE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({});

  async function pushForm(contactForm) {
    console.log(contactForm);
    const { error } = await supabase.from("formy").insert(contactForm);
    console.log(error);
  }

  const setContactFormState = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const authentication = () => {
    if (!contactForm?.email?.includes("@")) {
      toast("Enter a valid email.");
      return;
    }
    pushForm(contactForm);
  };

  return (
    <div
      id="background"
      class="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen pt-10"
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        id="formGrid"
        className="text-white grid grid-cols-[2fr,1fr] max-w-[70vw] mx-auto"
      >
        <div id="formContainer">
          <p className="text-5xl p-8">Contact form</p>
          <p className="p-4"> * = required </p>
          <form>
            <div
              id="formContentContainer"
              className="grid grid-cols-[1fr,2.5fr] grid-rows-6 grid-flow-col gap-4"
            >
              <label> Your Name </label>
              <label> Your Email </label>
              <label> Phone* </label>
              <label> Message Subject* </label>
              <label> Message* </label>
              <label> Verification* </label>
              <div id="nameInputs" className="flex gap-6">
                <input
                  className="text-gray-700 p-3 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => {
                    setContactFormState(e);
                  }}
                  value={contactForm?.firstName ? contactForm?.firstName : ""}
                />
                <input
                  className="p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-full"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setContactFormState(e);
                  }}
                  value={contactForm?.lastName ? contactForm?.lastName : ""}
                />
              </div>
              <input
                className="p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                placeholder="e.g. hello@contact.net"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.email ? contactForm?.email : ""}
              />
              <input
                className="p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="phone"
                placeholder="###-###-####"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.phone ? contactForm?.phone : ""}
              />
              <select
                className=" text-gray-800 focus:border-2 focus:border-gray w-2/3"
                name="messageSubject"
                value={
                  contactForm.messageSubject ? contactForm.messageSubject : ""
                }
                onChange={(e) => setContactFormState(e)}
              >
                <option value="Other" selected>
                  Other
                </option>
                <option value="Concerning Dragons">Concerning Dragons</option>
                <option value="Dungeon Hazard">Dungeon Hazard</option>
                <option value="Council Complaint">Council Complaint</option>
              </select>
              <input
                className="p-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="message"
                name="message"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.message ? contactForm?.message : ""}
              />
            </div>
            <hr className="p-4" />
            <div className="flex items-center justify-between">
              <button
                className="text-white border-white border-solid border-2 font-bold px-8 py-2 rounded-md focus:outline-none focus:shadow-outline mx-auto"
                type="button"
                onClick={authentication}
              >
                SUBMIT FORM
              </button>
              <Link
                to="/"
                className="bg-[#D44D78] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto p-4"
              >
                Back to Personal Details
              </Link>
            </div>
          </form>
        </div>
        <div id="emptyPicPlaceholder"></div>
      </div>
    </div>
  );
};

export default ContactForm;
