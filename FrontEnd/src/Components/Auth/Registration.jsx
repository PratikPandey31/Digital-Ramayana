import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SignIn.css'
export default function Registration() {
  const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const userData = { username, email, password };
  
      try {
        const response = await fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });   
  
        const result = await response.json();
        if (response.ok) {
          alert('Registration successful: ' + result.message);
        } else {
          alert('Registration failed: ' + result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-98 custom-div max-w-md bg-opacity-30 rounded-lg shadow-2xl bg-gray-800 m-9 p-4 backdrop-blur-sm flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className=" text-center text-3xl/9 font-bold tracking-tight text-gray-900 ">
            Register
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
              <label htmlFor="name" className="block text-xl/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
              </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password"  className="block text-xl/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form> 
        </div>
      </div>
    </div>
  )
}
