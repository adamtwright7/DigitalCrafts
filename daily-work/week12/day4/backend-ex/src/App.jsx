import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ruuwcpnrzznakaolxacc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDA1Njg0NiwiZXhwIjoxOTQ5NjMyODQ2fQ.G4A-G6QMJ_mVnSFjAu6UfU5hx8a4IMC2ENO2qli1eT4";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [signUpForm, setSignUpForm] = useState({ veteran: false });

  const fetchData = async () => {
    let { data, error } = await supabase
      .from("reactUserData")
      .select("firstName");
    console.log(data);
    console.log(error);
  };
  async function pushForm(signUpForm) {
    const {
      veteran,
      firstName,
      lastName,
      city,
      state,
      username,
      ethnicity,
      zip,
      ageGroup,
      address,
    } = signUpForm;
    fetchData();
    const { data, error } = await supabase.from("reactUserData").insert([
      {
        id: "299464e4-a8c0-11ed-afa1-0242ac120002",
        username,
        veteran,
        firstName,
        lastName,
        city,
        state,
        ethnicity,
        zip,
        ageGroup,
        address,
      },
    ]);
    console.log(data);
    console.log(error);
  }

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const toggleVetStatus = () => {
    setSignUpForm((signUpForm) => {
      return { ...signUpForm, veteran: !signUpForm.veteran };
    });
  };

  const authentication = () => {
    if (signUpForm?.username?.length < 6 || signUpForm?.username?.length > 14) {
      toast("Enter a username with 6-14 characters, inclusive.");
      return;
    }
    if (signUpForm?.zip?.length !== 5) {
      toast("Enter a 5-digit zip code.");
      return;
    }
    if (
      signUpForm?.ageGroup?.length !== 3 ||
      signUpForm?.ageGroup?.slice(-1) !== "s"
    ) {
      toast("Enter your age group, like so: 30s");
      return;
    }
    pushForm(signUpForm);
  };

  return (
    <div class="bg-[#D44D78] min-h-screen">
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
      <div class="mx-auto pt-10 w-[50vw] bg-[#1D2355] shadow-xl hover:shadow-2xl">
        <div className="mx-auto max-w-md">
          <p class="text-white text-center font-semibold text-2xl">
            CONTACT FORM
          </p>
          <form className="shadow-md rounded p-8">
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="username"
                placeholder="Enter Your Username"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.username ? signUpForm?.username : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.firstName ? signUpForm?.firstName : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.lastName ? signUpForm?.lastName : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                placeholder="Enter Your Address"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.address ? signUpForm?.address : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                name="city"
                placeholder="Enter Your City"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.city ? signUpForm?.city : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                type="text"
                name="state"
                placeholder="Enter Your State"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.state ? signUpForm?.state : ""}
              />
            </div>
            <div className="mb-4 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="ethnicity"
                type="text"
                name="ethnicity"
                placeholder="Enter Your Ethnicity"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.ethnicity ? signUpForm?.ethnicity : ""}
              />
            </div>
            <div className="mb-4 flex justify-between">
              <img src="../public/profile.jpg" />
              <label class="text-gray-200">Are you a veteran?</label>
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="veteran"
                type="checkbox"
                name="veteran"
                value={true}
                onClick={toggleVetStatus}
              />
            </div>
            <div className="mb-6 flex">
              <img src="../public/mail.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="zip"
                type="zip"
                name="zip"
                placeholder="Enter your 5-digit zip code, like so: 30000"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.zip ? signUpForm?.zip : ""}
              />
            </div>
            <div className="mb-6 flex">
              <img src="../public/profile.jpg" />
              <input
                className="border-b-slate-600 border-b-2 bg-inherit w-full p-3 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="ageGroup"
                name="ageGroup"
                type="ageGroup"
                placeholder="Enter your age group, like so: 30s"
                onChange={(e) => {
                  setFormState(e);
                }}
                value={signUpForm?.ageGroup ? signUpForm?.ageGroup : ""}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#D44D78] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mx-auto p-4"
                type="button"
                onClick={authentication}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
