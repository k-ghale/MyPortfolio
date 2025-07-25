import { useState } from 'react';
import API from '../api';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/signin', { email, password });
      localStorage.setItem('token', res.data.token);
      setMsg('✅ Signed in successfully!');
    } catch (err) {
      setMsg(err.response?.data?.error || 'Signin failed.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSignin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>
        <a href="/signup" className="mt-4 text-center text-sm text-blue-600 hover:underline">
          Don't have an account? Sign up
        </a>
        {msg && <p className="mt-4 text-center text-sm text-red-600">{msg}</p>}
      </div>
    </div>
  );
}
