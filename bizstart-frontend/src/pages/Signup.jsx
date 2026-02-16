import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SignUp = () => {
  // --- LOGIC START ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [step, setStep] = useState('signup'); // 'signup' or 'verify'
  const [userOtpInput, setUserOtpInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Generate a random 6-digit OTP
    const generatedOTP = Math.floor(100000 + Math.random() * 900000);

    // 2. Prepare data for EmailJS (Must match your template variables)
    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      otp_code: generatedOTP,
    };

    // 3. Send real email using EmailJS
    emailjs.send(
      'service_6jogra9', 
      'template_rsfk5p9', 
      templateParams,
      '8mAcOtOimKc5uwZk2'
    )
    .then(() => {
      // 4. Save to Local Storage on success
      const userToSave = {
        ...formData,
        otp: generatedOTP,
        verified: false,
      };
      localStorage.setItem('bizstart_user', JSON.stringify(userToSave));
      
      setLoading(false);
      setStep('verify'); // Switch to the OTP form
    })
    .catch((err) => {
      setLoading(false);
      alert("Failed to send email. Check your EmailJS keys.");
      console.error(err);
    });
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('bizstart_user'));

    if (userOtpInput === savedData.otp.toString()) {
      localStorage.setItem('bizstart_user', JSON.stringify({ ...savedData, verified: true }));
      alert("Email Verified! Welcome to BizStart AI.");
      window.location.href = "/"; 
    } else {
      alert("Invalid OTP code.");
    }
  };
  // --- LOGIC END ---

  return (
    <div id="signup" className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <a href="/" className="text-2xl font-bold text-slate-900 inline-block mb-8">
          BizStart <span className="text-teal-500">AI</span>
        </a>
        <h2 className="text-3xl font-extrabold text-slate-900">
          {step === 'signup' ? 'Create your account' : 'Verify your email'}
        </h2>
        <p className="mt-2 text-slate-600">
          {step === 'signup' ? 'Start your AI-powered business journey today' : `Enter the code sent to ${formData.email}`}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-10 shadow-xl shadow-slate-200 rounded-[2.5rem] border border-slate-100">
          
          {step === 'signup' ? (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-700">Full Name</label>
                <input 
                  name="fullName"
                  type="text" 
                  required 
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700">Email address</label>
                <input 
                  name="email"
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
                  name="password"
                  type="password" 
                  required 
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-teal-500 focus:border-teal-500 outline-none transition-all" 
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center">
                <input id="terms" type="checkbox" className="h-4 w-4 text-teal-500 border-gray-300 rounded" required />
                <label htmlFor="terms" className="ml-2 block text-sm text-slate-600">
                  I agree to the <a href="#" className="text-teal-600 hover:underline">Terms</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" disabled={loading} className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full shadow-lg text-sm font-bold text-white bg-teal-500 hover:bg-teal-600 focus:outline-none transition-all disabled:bg-slate-400">
                {loading ? 'Sending OTP...' : 'Create Account'}
              </button>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={handleVerify}>
              <div>
                <label className="block text-sm font-bold text-slate-700">Enter OTP Code</label>
                <input 
                  type="text" 
                  maxLength="6"
                  required 
                  value={userOtpInput}
                  onChange={(e) => setUserOtpInput(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 text-center text-2xl font-bold bg-slate-50 border border-slate-200 rounded-xl focus:ring-teal-500 outline-none" 
                  placeholder="000000" 
                />
              </div>
              <button type="submit" className="w-full py-4 rounded-full text-white bg-teal-500 font-bold shadow-lg hover:bg-teal-600 transition-all">
                Verify & Register
              </button>
              <button type="button" onClick={() => setStep('signup')} className="w-full text-sm text-slate-500 font-bold">
                Change Email
              </button>
            </form>
          )}

          {step === 'signup' && (
            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account? <a href="#login" className="text-teal-600 font-bold">Sign in</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;