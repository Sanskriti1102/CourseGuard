"use client";

import React, { useState } from 'react';

// Define the structure of error state
interface ErrorState {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<ErrorState>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const validateInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let emailValid = true;
    let passwordValid = true;

    const expectedEmail = 'courseguard';
    const expectedPassword = 'pass@123';

    let tempErrors: ErrorState = { email: '', password: '' };

    if (email.trim() === '') {
      tempErrors.email = 'Please fill this field';
      emailValid = false;
    } else if (email !== expectedEmail) {
      tempErrors.email = 'Invalid email';
      emailValid = false;
    }

    if (password.trim() === '') {
      tempErrors.password = 'Please fill this field';
      passwordValid = false;
    } else if (password !== expectedPassword) {
      tempErrors.password = 'Wrong password';
      passwordValid = false;
    }

    setError(tempErrors);

    if (emailValid && passwordValid) {
      console.log('Login successful');
    }
  };

  return (
    <div className="min-h-screen flex relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/images/image 4.png)' }}>
      <div className="left p-8 z-20 flex flex-col justify-center">
        <img src="/images/digi_logo.f906b744 3.png" alt="Logo" className="mb-4 wl" />
        <h1 className="text-4xl text-orange-500 font-bold"><b>India's first eCommerce</b></h1>
        <h3 className="text-2xl text-white"><b>and Applied Marketing Academy</b></h3>
        <p className="text-white mt-2">
          <b>Industry backend programs designed by <br /> professionals to accelerate your digital career</b>
        </p>
      </div>
      <div className="wrapper p-10 bg-white rounded-lg shadow-lg w-96 z-20">
        
        <form onSubmit={validateInput}>
          <img src="https://digiaccel.in/_next/static/media/digi_logo.f906b744.svg" alt="l" className="mb-5 bl" />
          <h1 className="llll"><b>Learners Login</b></h1>
          <p className="text-center mb-8">Sign into your account</p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border rounded ${error.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter Email"
            />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border rounded ${error.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter Password"
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          </div>
          <div className="flex justify-between text-sm mb-6">
            <label>
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500">Forgot Password</a>
          </div>
          <button
            type="submit"
            className="block w-full p-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
      <footer className="footer fixed bottom-0 left-0 right-0 p-4 bg-yellow-200 bg-opacity-55 text-center">
  <div>Terms of Use | Privacy Policy | Legal Notices & Terms</div>

  <div><b>©2023 digiaccel, All rights reserved</b></div>
</footer>
    </div>
  );
}
