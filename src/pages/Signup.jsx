import React from "react";
import AuthForm from "../components/AuthForm";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formdata) => {
    const {email, password} = formdata
    console.log("Signup", email, password);
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };

  return <AuthForm status={true} onSubmit={handleSignup} />;
};

export default Signup;
