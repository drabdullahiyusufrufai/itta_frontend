import React, { useState } from "react";

function AuthForm() {
  const [signIn, toggle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      setMessage("Sign-in successful!");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && password && name) {
      setMessage(`Welcome, ${name}! Account created successfully.`);
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 relative">
      <div className="bg-white rounded-lg shadow-lg w-[678px] max-w-full min-h-[400px] relative overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out ${
            !signIn ? "translate-x-full opacity-100 z-5" : "opacity-0 z-1"
          }`}
        >
          <form onSubmit={handleSignUp} className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
            <h1 className="font-bold">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
            />
            <button className="rounded-full border border-red-500 bg-red-500 text-white font-bold uppercase text-sm py-3 px-8 tracking-widest transform active:scale-95 focus:outline-none">
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-600 ease-in-out ${
            signIn ? "" : "translate-x-full"
          }`}
        >
          <form onSubmit={handleSignIn} className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
            <h1 className="font-bold">Sign in</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 border-none py-3 px-4 my-2 w-full"
            />
            <a href="#" className="text-gray-800 text-sm mt-4 mb-6">
              Forgot your password?
            </a>
            <button className="rounded-full border border-red-500 bg-red-500 text-white font-bold uppercase text-sm py-3 px-8 tracking-widest transform active:scale-95 focus:outline-none">
              Sign In
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-1000 ease-in-out z-100 ${
            !signIn ? "-translate-x-full" : ""
          }`}
        >
          <div
            className={`bg-gradient-to-r from-[#4683b6] to-[#1f7bc6] h-full w-[200%] absolute -left-full transition-transform duration-600 ease-in-out ${
              !signIn ? "translate-x-1/2" : ""
            }`}
          >
            <div
              className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-1000 ease-in-out ${
                !signIn ? "translate-x-0" : "-translate-x-[20%]"
              }`}
            >
              <h1 className="font-bold text-white">Welcome Back!</h1>
              <p className="text-sm font-light leading-5 tracking-wide text-white my-5">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => toggle(true)}
                className="bg-transparent border border-white text-white font-bold uppercase text-sm py-3 px-8 tracking-widest"
              >
                Sign In
              </button>
            </div>

            <div
              className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 right-0 transform transition-transform duration-600 ease-in-out ${
                !signIn ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <h1 className="font-bold text-white">Hello, Friend!</h1>
              <p className="text-sm font-light leading-5 tracking-wide text-white my-5">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => toggle(false)}
                className="bg-transparent border border-white text-white font-bold uppercase text-sm py-3 px-8 tracking-widest"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {message && (
          <div className="absolute bottom-0 left-0 right-0 bg-gray-100 text-center py-2">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
