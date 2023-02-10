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
    if (
      contactForm?.username?.length < 6 ||
      contactForm?.username?.length > 14
    ) {
      toast("Enter a username with 6-14 characters, inclusive.");
    }
    if (contactForm?.zip?.length !== 5) {
      toast("Enter a 5-digit zip code.");
      return;
    }
    if (
      contactForm?.ageGroup?.length !== 3 ||
      contactForm?.ageGroup?.slice(-1) !== "s"
    ) {
      toast("Enter your age group, like so: 30s");
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
          <div id="formContentContainer">
            <label> Your Name </label>
            <label> Your Email </label>
            <label> Phone* </label>
            <label> Message Subject* </label>
            <label> Message* </label>
            <label> Verification* </label>
            <form>
              <input
                className="p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.firstName ? contactForm?.firstName : ""}
              />
              <input
                className="p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.lastName ? contactForm?.lastName : ""}
              />
              <input
                className="p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                placeholder="e.g. hello@contact.net"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.email ? contactForm?.email : ""}
              />
              <input
                className="p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="phone"
                placeholder="###-###-####"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.phone ? contactForm?.phone : ""}
              />
              <select
                className="mx-3 text-gray-600 focus:border-2 focus:border-gray"
                name="messageSubject"
                value={
                  contactForm.messageSubject ? contactForm.messageSubject : ""
                }
                onChange={(e) => setFormState(e)}
              >
                <option value="Other" selected>
                  Other
                </option>
                <option value="Concerning Dragons">Concerning Dragons</option>
                <option value="Dungeon Hazard">Dungeon Hazard</option>
                <option value="Council Complaint">Council Complaint</option>
              </select>
              <input
                className="p-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="message"
                name="message"
                onChange={(e) => {
                  setContactFormState(e);
                }}
                value={contactForm?.message ? contactForm?.message : ""}
              />
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#D44D78] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto p-4"
                  type="button"
                  onClick={authentication}
                >
                  SUBMIT
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
        </div>
        <div id="emptyPicPlaceholder"></div>
      </div>
    </div>
  );
};

export default ContactForm;
