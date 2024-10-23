import React from 'react';
import AuthForm from '../components/AuthForm';
import { auth, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithRedirect } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      // Add error handling here (e.g., show an alert or set an error state)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      console.log('Google login successful');
    } catch (error) {
      console.error('Google login error:', error);
      // Add error handling here
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      handleGoogleLogin={handleGoogleLogin} // Pass the Google login function
    />
  );
};

export default Login;
