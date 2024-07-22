import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Contact() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      const userInfo = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
  
      try {
        await axios.post('https://getform.io/f/bjjerdvb', userInfo);
        toast.success('Your message has been sent!');
      } catch (error) {
        console.error(error);
        toast.error('Something went wrong. Please try again.');
      }
    };
  
    return (
      <div className="max-w-screen-md mx-auto px-4 md:px-8 py-12 bg-[#EBF4F6] rounded-lg shadow-lg">
        <div className="border-2 border-[#071952] p-6 rounded-lg mb-8 bg-[#EBF4F6]">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#071952]">Contact Me</h1>
          <p className="text-center mb-8 text-[#071952]">
            Feel free to reach out by filling out the form below.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-medium mb-2 text-[#071952]">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Full Name"
              required
              className="border border-[#37B7C3] rounded-lg p-3 text-[#071952] focus:outline-none focus:ring-2 focus:ring-[#37B7C3]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2 text-[#071952]">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
              className="border border-[#37B7C3] rounded-lg p-3 text-[#071952] focus:outline-none focus:ring-2 focus:ring-[#37B7C3]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium mb-2 text-[#071952]">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="border border-[#37B7C3] rounded-lg p-3 text-[#071952] focus:outline-none focus:ring-2 focus:ring-[#37B7C3]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#088395] text-[#EBF4F6] font-semibold py-3 rounded-lg hover:bg-[#37B7C3] focus:outline-none focus:ring-2 focus:ring-[#088395]"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }