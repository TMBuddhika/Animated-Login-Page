import React, { useEffect, useState } from 'react';
import ParticleBackground from './animations/ParticleBackground';
import LoginForm from './ui/LoginForm';
const LoginPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return <main className="relative flex w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Logo */}
        <div className={`mb-8 transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h1 className="ml-3 text-2xl font-bold text-white">TechFlow</h1>
          </div>
        </div>
        {/* Login form container */}
        <div className={`w-full max-w-md transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-xl border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <LoginForm />
          </div>
          {/* Footer */}
          <div className={`mt-6 text-center text-gray-400 text-sm transition-all delay-300 duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <p>
              Don't have an account?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>;
};
export default LoginPage;