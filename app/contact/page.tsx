'use client';

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h1 className="mt-1 mb-8 rounded-sm bg-amber-400 -rotate-3">Contact Me</h1>
      
      {/* Flex container for two columns */}
      <div className="contact-container flex flex-col md:flex-row justify-between">
        
        {/* Contact Details Section */}
        <div className="contact-details w-full md:w-1/2 p-4">
          <div className="contact-image">
            <img src="/images/contact.png" alt="Contact illustration" className="mb-4" />
          </div>
          <ul className="contact-info">
            <li className="mb-2"><FaPhoneAlt className="inline-block mr-2" /> +94 754239617</li>
            <li className="mb-2"><FaEnvelope className="inline-block mr-2" /> hirunikaushalyaindrajith@gmail.com</li>
            <li className="mb-2"><FaLinkedin className="inline-block mr-2" /> Hiruni Kaushalya Indrajith</li>
            <li className="mb-2"><FaGithub className="inline-block mr-2" /> HiruniKau</li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="contact-form w-full md:w-1/2 p-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                name="message"
                placeholder="Write Me..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-amber-400 rounded hover:bg-amber-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
