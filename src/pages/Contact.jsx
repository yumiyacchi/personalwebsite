import React from "react";
import ContactForm from "../components/ContactForm";
import "/src/components/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;