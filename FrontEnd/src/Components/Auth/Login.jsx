import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await 
            
            ('https://digital-ramayana.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                alert('Login successful!');
                const from = location.state?.from?.pathname || '/';
                navigate(from, { replace: true });
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('An error occurred while logging in');
        }
    };
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="h-98 custom-div max-w-md bg-opacity-30 rounded-lg shadow-2xl bg-gray-800 m-9 p-4 backdrop-blur-sm flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
            <h2 className=" text-center text-3xl/9 font-bold tracking-tight text-gray-900 ">
              Log in
            </h2>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-xl/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password"  className="block text-xl/6 font-medium text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="px-2 flex w-full justify-center rounded-md bg-indigo-600 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form> 
          </div>
        </div>
      </div>
    )
  }
  
