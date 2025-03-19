import React from "react";
import AuthForm from "../components/AuthForm";
import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Signup = () => {
  const navigate = useNavigate();
  const {setUser} = useUser()

  const handleSignup = async (formdata) => {
    const {email, password} = formdata
    console.log("Signup", email, password);
    
    try {
      const userData = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful");
      navigate("/dashboard");


      const user  = userData.user;
      console.log(user)

      
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };


  const handleLogin = async (formData)=>{
    const {email, password} = formData
    console.log(email, password)
  try {
    const userData = await signInWithEmailAndPassword(auth, email, password)
    const user = userData.user
    console.log(user)
    setUser(user)
    navigate("/dashboard")
    return user
  } catch (error) {
    console.log("Login error", error.message)
  }

  }


  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithRedirect(auth, googleProvider);
      console.log("Google login successful:", result.user);
      navigate("/dashboard"); // Redirect user after login
      setUser(result.user)
    } catch (error) {
      console.error("Google login error:", error.message);
      alert(`Google login failed: ${error.message}`);
    }
  };

  return <AuthForm status={true} onSubmit={handleSignup} handleGoogleLogin={handleGoogleLogin} handleLogin={handleLogin} />;
};

export default Signup;
