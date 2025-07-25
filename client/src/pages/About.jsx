// src/pages/About.jsx
import myPic from '../assets/kabin-ghale.jpg'; // Replace with actual path
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white px-6 py-16 flex flex-col items-center text-center font-sans">
      <h1 className="text-4xl font-bold mb-6">Kabin Ghale</h1>

      <img
        src={myPic}
        className="w-48 h-48 object-cover rounded-full border-4 border-gray-700 mb-6 shadow-md"
      />

      <p className="max-w-xl text-lg mb-6">
        I’m a smart-working and results-oriented individual with a passion for continuous learning and self-improvement.
      </p>

      <a
        href="/your-resume.pdf" // Replace with actual resume path
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Download Resume
      </a>
    </div>
    </>
  );
};

export default About;
