import React from "react";
import AuthForm from "../components/AuthForm";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const {email, password, } = formData
    console.log("Form data received:", formData);
console.log("Attempting login with email:", email, "and password:", password);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("/studentDashboard");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      console.log("Google login initiated");
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return <AuthForm status={false} onSubmit={handleLogin} handleGoogleLogin={handleGoogleLogin} />;
};

export default Login;
