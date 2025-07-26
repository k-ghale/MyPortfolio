
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Optionally reset the form
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="flex-1 p-3 rounded bg-gray-800 border border-gray-700 text-white"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
          required
        />

        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white h-32 resize-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
        >
          Send
        </button>
      </form>
    </div>
    </>
  );
}

export default Contact;
