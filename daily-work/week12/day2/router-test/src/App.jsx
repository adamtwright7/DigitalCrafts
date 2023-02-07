import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Account from "./components/Account/Account";
import Homepage from "./components/Homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Settings from "./components/Account/Settings";
import AccountUser from "./components/Account/AccountUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Adam");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage user={user} />} />
        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="settings" element={<Settings />} />
          <Route path=":id" element={<AccountUser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
