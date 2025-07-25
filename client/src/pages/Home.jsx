import React from 'react';
import heroImage from '../assets/hero.jpg'; // Replace with actual path
  import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      {/* Navigation Bar */}
      <Navbar />
      <header className="flex justify-between items-center px-8 py-6">

        {/* Site Title */}
        <h1 className="w-full text-lg font-bold text-center">Kabin Ghale</h1>

        {/* Social Icons */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram" /></a>
          <a href="#" className="hover:text-gray-400"><i className="fas fa-envelope" /></a>
        </div>
      </header>

      {/* Background Text */}
      <h1 className="absolute top-36 w-full text-center text-[200px] md:text-[240px] font-extrabold text-gray-800 opacity-20 select-none tracking-tight leading-none z-0">
        KABIN 
      </h1>

      {/* Main Image */}
      <main className="relative z-10 flex justify-center mt-28 px-4">
        <img
          src={heroImage} // Update this if you're using public folder or dynamic import
          alt="Hero"
          className="w-20% max-w-20% h-20% size-100 object-cover rounded-md shadow-lg"
        />
      </main>
    </div>
  );
}

export default Home;
