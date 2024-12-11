"use client"

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <div className="bg-zinc-300 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-black mb-6">Contact Us</h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          We&apos;d love to hear from you! Please fill out the form below with your message or questions.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-zinc-300 p-8 rounded-md border border-black shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="text-zinc-800 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-zinc-800 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-black rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-zinc-800 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-black rounded-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-black hover:bg-fuchsia-500 text-zinc-700 px-6 py-3 rounded-md border border-zinc-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;