import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const response = await fetch('https://digital-ramayana.onrender.com/logi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                alert('Login successful!');

                const redirectPath = location.state?.from?.pathname || '/dashboard';
                navigate(redirectPath, { replace: true });
            } else {
                setError(data.error || 'Invalid credentials');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false); 
        }
    };

    return (
      <div className="flex items-center justify-center h-screen bg-orange-200">
        <div className="h-98 custom-div max-w-md bg-opacity-10 rounded-lg shadow-2xl bg-gray-800 m-9 p-4 backdrop-blur-sm flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Log in
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-gray-900">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-xl font-medium text-gray-900">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading} // 🔹 Disable button while logging in
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm ${
                    loading ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-500'
                  } focus-visible:outline focus-visible:ring-2 focus-visible:ring-indigo-600`}
                >
                  {loading ? 'Logging in...' : 'Log in'}
                </button>
              </div>
              {error && <div className="text-red-600 mt-2 text-sm">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    );
}
