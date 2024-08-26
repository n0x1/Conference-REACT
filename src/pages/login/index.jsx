import React, { useState } from "react";

export default function Explore({ setIsSignedIn }) {
  // State to manage form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation for example
    if (email && password) {
      // Simulate login success
      setIsSignedIn(true);
      // Optionally, redirect to a different page or perform additional actions
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center py-2 mt-4">Login</h1>
      <div>
        <div>
          <div className="border-y-2 w-auto border-l-2 border-black bg-zinc-400 min-h-64 px-2 mx-auto w-1/4 rounded-xl flex flex-col justify-center items-center mb-4">
            <div className="flex mb-2">
              <label className="text-2xl" htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-500 min-w-48 px-2 rounded-xl mx-2"
              />
            </div>

            <div className="flex">
              <label className="text-2xl" htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-500 min-w-48 px-2 rounded-xl mx-2"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="p-0.5 mt-2"
            >
              Sign in
            </button>

            <a className="mt-12" href="/signup">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
