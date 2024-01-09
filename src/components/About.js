import React from "react";
import useScrollAnimation from './useScrollAnimation';
import "../styles/About.css"; // Make sure to create an About.css file with the styles

function About() {

  const scrollRef = useScrollAnimation();

  return (
    <div className="about" ref={scrollRef}>
      <section className='products-main container animate-on-scroll'>
        <h1>About Us</h1>
      </section>
      <section className="about-container container animate-on-scroll">
        <p>Founded as a visionary audio repair hub, ACE Audio & Conference Ltd. quickly became the go-to for cutting-edge audio solutions. Our journey from a trusted repair center to a full-scale audio system installation service reflects our commitment to innovation and customer satisfaction.</p>
        <p>Recognizing a demand for affordable yet high-quality products, we began importing our bespoke audio equipment - a harmonious blend of cost-effectiveness and superior quality.</p>
        <p>As our expertise grew, so did our services, encompassing conference audio solutions with state-of-the-art microphone and interpretation systems. Our proficiency in modern installation techniques for projection and multiroom systems, as well as compliance with EN 54-16 standards, sets us apart in the industry.</p>
        <p>Today, we pride ourselves on offering comprehensive services that extend beyond product provision to include design, cabling for new constructions, and relentless technical support. Our extensive experience is your asset, ensuring that every acoustic challenge is met with an adept solution.</p>
        <p>At ACE Audio & Conference, we believe that our seasoned experience is the key to unlocking the full potential of your audio-visual endeavors. Partner with us for a symphony of professional excellence and innovation.</p>
      </section>
    </div>
  );
}

export default About;