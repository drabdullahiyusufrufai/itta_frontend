import React, { useState } from 'react';
import '../styles/AuthForm.css';
import { FaUser, FaLock, FaEnvelope, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import signImImage from "../assets/images/svg/log.svg"
import signUpImage from "../assets/images/svg/register.svg"
import { HiOutlineUser } from 'react-icons/hi';
import avatar from "../assets/images/avatar.png"



const AuthForm = ({status, onSubmit, handleGoogleLogin}) => {
  const [isSignUpMode, setIsSignUpMode] = useState(status);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(
      (prev)=>({...prev, [name]:value}),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
    
    setFormData({
      name:"",
      email:"",
      password:"",
    });
  };

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  return (
    <main className=''>
      
    <div className={`authContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className="auth-form sign-in-form">
            <img src={avatar} className='rounded-full w-32' />
            <h2 className="title">Sign in</h2>
            <div className="border-[1px] border-slate-400 flex items-center mx-3 md:mx-0 gap-2 bg-slate-50 px-2 my-1 rounded-lg">
              <HiOutlineUser className="icon" />
              <input  className='p-2 bg-transparent focus:outline-none my-1' type="text" placeholder="Username" name='email' onChange={handleChange} />
            </div>
            <div className="border-[1px] border-slate-400 flex items-center gap-2 mx-3 md:mx-0 bg-slate-50 px-2 my-1 rounded-lg">
              <FaLock className="icon" />
              <input  className='p-2 bg-transparent focus:outline-none my-1' type="password" placeholder="Password" name='password' onChange={handleChange}  />
            </div>
            <button  type="button" onClick={handleSubmit} value="Login" className="btn solid" >
              Sign In
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <button  type="submit" className="social-icon"><FaGoogle /></button>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form className="auth-form sign-up-form ">
          <img src={avatar} className='rounded-full w-32 border p-2 border-primary' />

            <h2 className="title">Sign up</h2>
            <div className=" flex border-[1px] border-slate-400 mx-3 md:mx-0 px-2 my-1 md:my-2 items-center gap-2 bg-slate-50   rounded-lg">
              <FaUser className="icon" />
              <input  className='p-2 bg-transparent focus:outline-none my-1 md:my-2' type="text" placeholder="Username" name='name' onChange={handleChange} />
            </div>
            <div className=" flex border-[1px] border-slate-400 mx-3 md:mx-0 px-2 my-1 md:my-2 items-center gap-2 bg-slate-50   rounded-lg">
              <FaEnvelope className="icon" />
              <input  className='p-2 bg-transparent focus:outline-none my-1 md:my-2' type="email" placeholder="Email" name='email'  onChange={handleChange} />
            </div>
            <div className=" flex border-[1px] border-slate-400 mx-3 md:mx-0 px-2 my-1 md:my-2 items-center gap-2 bg-slate-50   rounded-lg">
              <FaLock className="icon" />
              <input  className='p-2 bg-transparent focus:outline-none my-1 md:my-2' type="password" placeholder="Password" name='password' onChange={handleChange}  />
            </div>
            <button type="submit" className="btn" onClick={handleSubmit} value="Sign up">Sign up</button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
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
         <img src={signUpImage} className='image' />
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
          <img src={signImImage} className='image' />
        </div>
      </div>
    </div>
    </main>
  );
};

export default AuthForm;
