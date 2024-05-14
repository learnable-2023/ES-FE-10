import React from "react";
import SignUp from "../components/SignUp";
import NavBar from "../components/NavBar";

function SignupPage() {
  return (
    <div className="h-screen">
      <nav className="hidden md:block">
        <NavBar />
      </nav>
      <div className="bg-mobile-bg">
        <SignUp />
      </div>
    </div>
  );
}

export default SignupPage;
