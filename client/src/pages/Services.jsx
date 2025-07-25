import React from "react";
  import Navbar from '../components/Navbar';

function Services() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center font-sans">
      <h1 className="text-4xl font-bold mb-4">My Services</h1>
      <p className="text-lg mb-8 max-w-2xl">
        I offer a range of services to help you achieve your goals:
      </p>

      <ul className="space-y-4 text-left max-w-xl">
        <li className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="font-semibold">Web Development:</span> Building responsive and user-friendly websites.
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="font-semibold">Mobile App Development:</span> Creating mobile applications for iOS and Android.
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
          <span className="font-semibold">Consulting:</span> Providing expert advice on technology and business strategies.
        </li>
      </ul>
    </div>
    </>
  );
}

export default Services;

