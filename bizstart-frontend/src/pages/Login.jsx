import React, { useState } from 'react';

const Login = () => {
  // --- LOGIC START ---
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    // Basic handler to update state based on input name
    setLoginData(prev => ({ 
      ...prev, 
      [type === 'email' ? 'email' : 'password']: value 
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 1. Get the user data we saved during Signup
    const savedUser = JSON.parse(localStorage.getItem('bizstart_user'));

    // 2. Check if user exists and if email matches
    if (!savedUser || savedUser.email !== loginData.email) {
      alert("You don't exist! Please sign up first.");
      return;
    }

    // 3. Check if password matches
    if (savedUser.password === loginData.password) {
      alert(`Welcome back, ${savedUser.fullName}!`);
      // You can redirect them to a dashboard here
      // window.location.href = "/dashboard";
    } else {
      alert("Incorrect password. Please try again.");
    }
  };
  // --- LOGIC END ---

  return (
    <div id="login" className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <a href="/" className="text-2xl font-bold text-slate-900 inline-block mb-8">
          BizStart <span className="text-teal-500">AI</span>
        </a> 
        <h2 className="text-3xl font-extrabold text-slate-900">Welcome back</h2>
        <p className="mt-2 text-slate-600">Continue building your business journey</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-10 shadow-xl shadow-slate-200 rounded-[2.5rem] border border-slate-100">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-slate-700">Email address</label>
              <input 
                type="email" 
                required 
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" 
                placeholder="name@company.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700">Password</label>
              <input 
                type="password" 
                required 
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" 
              />
            </div>
            <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none transition-all">
              Sign In
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-slate-600">
            New to BizStart AI? <a href="/signup" className="text-teal-600 font-bold">Start learning free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;