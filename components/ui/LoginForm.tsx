import React, { useState } from 'react';
const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    isSubmitting: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({
      ...formState,
      isSubmitting: true
    });
    // Simulate API call
    setTimeout(() => {
      setFormState({
        ...formState,
        isSubmitting: false
      });
    }, 1500);
  };
  return <form onSubmit={handleSubmit} className="space-y-5">
      <div className="group">
        <div className="relative">
          <input type="email" name="email" id="email" value={formState.email} onChange={handleChange} className="peer w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg outline-none transition-all duration-300 focus:border-blue-500 placeholder-transparent" placeholder="Email address" required />
          <label htmlFor="email" className="absolute left-4 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400">
            Email address
          </label>
        </div>
      </div>
      <div className="group">
        <div className="relative">
          <input type="password" name="password" id="password" value={formState.password} onChange={handleChange} className="peer w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg outline-none transition-all duration-300 focus:border-blue-500 placeholder-transparent" placeholder="Password" required />
          <label htmlFor="password" className="absolute left-4 -top-6 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-blue-400">
            Password
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900" />
          <label htmlFor="remember-me" className="ml-2 block text-gray-400">
            Remember me
          </label>
        </div>
        <div>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
            Forgot password?
          </a>
        </div>
      </div>
      <button type="submit" className={`w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-0.5 ${formState.isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`} disabled={formState.isSubmitting}>
        {formState.isSubmitting ? <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </div> : 'Sign in'}
      </button>
      <div className="relative flex items-center justify-center mt-6">
        <div className="absolute border-t border-gray-700 w-full"></div>
        <div className="relative bg-gray-900 px-4 text-gray-500 text-sm">
          or continue with
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <button type="button" className="flex justify-center items-center py-2.5 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37273 0 0 5.37273 0 12C0 17.31 3.435 21.8264 8.20455 23.4273C8.80909 23.5309 9 23.1655 9 22.8545C9 22.5818 9 21.8182 9 20.8091C5.67273 21.5318 4.96364 19.1455 4.96364 19.1455C4.41818 17.7682 3.63636 17.4 3.63636 17.4C2.54545 16.6636 3.72727 16.6636 3.72727 16.6636C4.90909 16.7455 5.54545 17.9182 5.54545 17.9182C6.60909 19.7455 8.35909 19.1455 9.05455 18.8727C9.15455 18.1091 9.46364 17.5909 9.8 17.31C7.14545 17.0291 4.35273 16 4.35273 11.3455C4.35273 10.0364 4.82727 8.96364 5.54545 8.09091C5.44545 7.8 5.02727 6.56364 5.67273 4.92727C5.67273 4.92727 6.67273 4.61818 9 6.13636C9.95455 5.87273 11 5.74545 12 5.74545C13 5.74545 14.0455 5.87273 15 6.13636C17.3273 4.61818 18.3273 4.92727 18.3273 4.92727C18.9727 6.56364 18.5545 7.8 18.4545 8.09091C19.1727 8.96364 19.6455 10.0364 19.6455 11.3455C19.6455 16 16.8545 17.0291 14.2 17.31C14.6364 17.6727 15 18.3655 15 19.4364C15 20.9455 15 22.4545 15 22.8545C15 23.1655 15.1909 23.5309 15.7955 23.4273C20.565 21.8264 24 17.31 24 12C24 5.37273 18.6273 0 12 0Z" fill="white" />
          </svg>
        </button>
        <button type="button" className="flex justify-center items-center py-2.5 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9981 12.2864C23.9981 11.4307 23.9368 10.8123 23.8039 10.1746H12.2432V14.7636H18.8743C18.7721 15.7684 18.0575 17.2816 16.5738 18.3058L16.5508 18.4621L20.2216 21.2079L20.4706 21.2323C22.7935 19.1239 23.9981 15.9452 23.9981 12.2864Z" fill="#4285F4" />
            <path d="M12.2432 24.0001C15.5482 24.0001 18.3123 22.9375 20.4706 21.2323L16.5738 18.3058C15.5482 19.0016 14.1462 19.4736 12.2432 19.4736C9.00392 19.4736 6.2602 17.3653 5.28555 14.4211L5.13626 14.4329L1.31279 17.2957L1.26489 17.4365C3.40863 21.3153 7.5251 24.0001 12.2432 24.0001Z" fill="#34A853" />
            <path d="M5.28551 14.4211C5.02693 13.7834 4.87826 13.0973 4.87826 12.3889C4.87826 11.6804 5.02693 10.9943 5.27344 10.3566L5.26648 10.1911L1.40283 7.28809L1.26486 7.34117C0.461914 9.15479 0 11.1645 0 13.2778C0 15.391 0.461914 17.4007 1.26486 19.2143L5.28551 14.4211Z" fill="#FBBC05" />
            <path d="M12.2432 6.30423C14.5456 6.30423 16.0905 7.21458 16.9777 8.02493L20.4706 4.64117C18.3021 2.63154 15.5482 1.33337 12.2432 1.33337C7.5251 1.33337 3.40863 4.01814 1.26489 7.89698L5.27347 12.6902C6.2602 9.74592 9.00392 6.30423 12.2432 6.30423Z" fill="#EB4335" />
          </svg>
        </button>
        <button type="button" className="flex justify-center items-center py-2.5 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors duration-300">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8033 0H7.19674C3.22618 0 0 3.22618 0 7.19674V16.8033C0 20.7738 3.22618 24 7.19674 24H16.8033C20.7738 24 24 20.7738 24 16.8033V7.19674C24 3.22618 20.7738 0 16.8033 0Z" fill="#1877F2" />
            <path d="M16.8075 12H13.5V9C13.5 8.172 14.172 8.25 15 8.25H16.5V4.5H13.5C12.3065 4.5 11.1619 4.97411 10.318 5.81802C9.47411 6.66193 9 7.80653 9 9V12H6V15.75H9V24H13.5V15.75H15.75L16.8075 12Z" fill="white" />
          </svg>
        </button>
      </div>
    </form>;
};
export default LoginForm;