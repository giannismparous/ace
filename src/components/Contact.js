import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import useScrollAnimation from './useScrollAnimation';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_18yusfn', 'template_jranh97', form.current, 'bgBojYnJcq26l1FGQ')
      .then((result) => {
          alert('Message sent successfully!');
      }, (error) => {
          alert('Failed to send message, please try again.');
      });
  };

  const scrollRef = useScrollAnimation();

  return (
    <div className="contact" ref={scrollRef}>
      <section className="contact-container container animate-on-scroll">
        <h1>Contact ACE Audio & Conference Ltd</h1>
        <p>Email us at aceaudioconference@gmail.com or fill out the form below:</p>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
