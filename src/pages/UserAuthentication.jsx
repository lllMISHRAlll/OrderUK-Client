import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../component/Footer";
import SignUp from "../component/SignUp";
import LogIn from "../component/LogIn";

export default function UserAuthentication() {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </>
  );
}
