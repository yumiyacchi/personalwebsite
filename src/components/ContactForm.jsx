import { useState } from "react";
import { addDoc, collection, db } from "../firebase";

import './ContactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Comisiónes",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("¡Mensaje enviado con éxito!");
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        required
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      />
      <select
        name="subject"
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option>Comisiónes</option>
        <option>Contrataciónes DJ</option>
        <option>Otras consultas</option>
        <option>Diseño Web</option>
      </select>
      <textarea
        name="message"
        placeholder="Escribe tu consulta acá"
        required
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      ></textarea>
      <div className="flex gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Enviar
        </button>
        <a
          href="/Rider.pdf" // Asegúrate de que Rider.pdf esté en la carpeta public de tu proyecto
          download="Rider.pdf"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
        >
          Descargar Rider
        </a>
      </div>
    </form>
  );
};

export default ContactForm;