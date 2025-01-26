import React, { useRef } from 'react';
import Navbar from '../components/HomeNav';
import '../styles/Home.css'; // Import the CSS file for styling


const Home = () => {
  // Create refs for each section
  const peopleRef = useRef(null);
  const insightsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} refs={{ peopleRef, insightsRef, contactRef }} />

      {/* Hero Section */}
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to VJTI OLX <br />
          <span className="text-yellow-400">Buy, Sell, and Connect</span>
        </h1>
      </section>

      {/* People Section */}
      <section ref={peopleRef} className="h-screen bg-blue-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Meet the VJTI Community</h2>
      </section>

      {/* Insights Section */}
      <section ref={insightsRef} className="h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Platform Insights</h2>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
      </section>
    </div>
  );
};


export default Home;
