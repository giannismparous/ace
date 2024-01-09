import React from "react";
import "../styles/Home.css";
import useScrollAnimation from './useScrollAnimation';
import ImageScroller from './ImageScroller'; // The path to your ImageScroller component

function Home() {

    const scrollRef = useScrollAnimation();

    return (
        <div ref={scrollRef} className="home">
          <ImageScroller />
          <section className="welcome container animate-on-scroll">
            <h1>Welcome to ACE Audio & Conference Ltd.</h1>
            <p>The best of sound technology is here. With 18 years of experience in audio-conference-projecting installations, we bring quality and expertise to every project.</p>
          </section>
        <section className="services container animate-on-scroll">
          <div className="centered-header">
          <h2>Our Services</h2>
          </div>
          <p>Specializing in PA installations, multi-room installations, and enhanced sound systems, ACE Audio & Conference is at the forefront of new audio technology. We provide bespoke design and permanent installation solutions to meet all your audio needs.</p>
          <img src='../other_images/services.jpg' alt="Services" id="services_img" ></img>
          <p>Our skilled technicians are equipped to handle any challenge in a variety of settings:</p>
          <ul className="dashed-list">
            <li>Buildings, both large and small</li>
            <li>Sports Stadiums</li>
            <li>Healthcare Facilities</li>
            <li>Conference Rooms</li>
            <li>Auditoriums</li>
            <li>Private Villas</li>
            <li>Airports</li>
            <li>Shopping Malls</li>
            ...and more.
          </ul>
        </section>
        
        <section className="call-to-action container animate-on-scroll">
        <div className="centered-header">
        <h2>Get in Touch</h2>
        </div>
          <p><a href="/contact">Contact us</a> to discuss how we can elevate your audio experience. Our team is ready to design and implement a system that perfectly fits your space and needs.</p>
        </section>

      </div>
  );
}

export default Home;
