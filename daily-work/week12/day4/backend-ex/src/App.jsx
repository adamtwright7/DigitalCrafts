import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [signUpForm, setSignUpForm] = useState({});

  const setFormState = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const authentication = () => {
    if (signUpForm?.username?.length < 6 || signUpForm?.username?.length > 14) {
      toast("Enter a username with 6-14 characters, inclusive.");
    }
    if (signUpForm?.zip?.length !== 5) {
      toast("Enter a 5-digit zip code.");
      console.log("incorrect zip");
    }
    if (
      signUpForm?.ageGroup?.length !== 3 ||
      signUpForm.ageGroup.slice(-1) !== "s"
    ) {
      toast("Enter your age group, like so: 30s");
    }
  };

  return (
    <div class="bg-[#D44D78] h-screen">
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
          <form className="shadow-md rounded p-8 my-4">
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
                value={signUpForm.username ? signUpForm.username : ""}
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
                value={signUpForm.zip ? signUpForm.zip : ""}
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
                value={signUpForm.ageGroup ? signUpForm.ageGroup : ""}
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
