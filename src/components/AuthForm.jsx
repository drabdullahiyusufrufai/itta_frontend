import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { FaUser, FaLock, FaEnvelope, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    <div className={`authContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field flex items-center gap-5 bg-slate-50 p-1 my-2 rounded-lg">
              <FaUser className="icon" />
              <input className='p-2 bg-transparent focus:outline-none my-1' type="text" placeholder="Username" />
            </div>
            <div className="input-field flex items-center gap-5 bg-slate-50 p-1 my-2 rounded-lg">
              <FaLock className="icon" />
              <input className='p-2 bg-transparent focus:outline-none my-1' type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field flex items-center gap-5 bg-slate-50 p-1 my-2 rounded-lg">
              <FaUser className="icon" />
              <input className='p-2 bg-transparent focus:outline-none my-1' type="text" placeholder="Username" />
            </div>
            <div className="input-field flex items-center gap-5 bg-slate-50 p-1 my-2 rounded-lg">
              <FaEnvelope className="icon" />
              <input className='p-2 bg-transparent focus:outline-none my-1' type="email" placeholder="Email" />
            </div>
            <div className="input-field flex items-center gap-5 bg-slate-50 p-1 my-2 rounded-lg">
              <FaLock className="icon" />
              <input className='p-2 bg-transparent focus:outline-none my-1' type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        {/* Left Panel */}
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          {/* Insert SVG or other images here */}
        </div>

        {/* Right Panel */}
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          {/* Insert SVG or other images here */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
