const ContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <select>
        <option>Commission Work</option>
        <option>Bookings</option>
        <option>General Inquiry</option>
      </select>
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactForm;