import React, { useState } from "react";
import { db, collection, addDoc } from "../firebase";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Commission Work",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message Sent Successfully!");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Your Name" required onChange={handleChange} />
      <input name="email" type="email" placeholder="Your Email" required onChange={handleChange} />
      <select name="subject" onChange={handleChange}>
        <option>Commission Work</option>
        <option>Bookings</option>
        <option>General Inquiry</option>
      </select>
      <textarea name="message" placeholder="Your Message" onChange={handleChange}></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;