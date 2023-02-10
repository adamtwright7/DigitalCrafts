import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import ContactForm from "./components/ContactForm";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
