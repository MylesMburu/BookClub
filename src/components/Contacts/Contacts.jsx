import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'

// import 'dotenv/config';


export const Contacts = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm('service_b4yrlg9','template_8qnuo6d',form.current,'BuzQ1LqDL1lsJ2zC4');
    } catch (error) {
      
    }
    e.target.reset();
    window.alert('Message sent');

  }
  return (
    <div className='bg-primary text-white p-16 h-screen'>
      <div className='grid grid-cols-2 px-6 pt-8'>
        <div className='text-black'>
          <h2 className='border-b-2 border-white text-white pb-1 mb-4'>Contact Us</h2>
          <div className='px-2 mb-16'>
          <p className='text-white'>Our team would love to hear from you!</p>
          <p className='text-white'>Get in touch with us to share your comments, suggestions or questions. We'll get back to you as soon as possible.</p>
          </div>
          <div className="flex gap-4 bg-secondary p-3 rounded mb-4">
            <FiPhoneCall className='mt-1'/>
            <h3>
              +(254)759129028
            </h3>
          </div>
          <div className="flex gap-4 bg-secondary p-3 rounded mb-4">
            <HiOutlineMail className='mt-1'/>
            <h3>
            foundbookclub0@gmail.com
            </h3>
          </div>
        </div>
        <div>
          <form className="flex flex-col p-8 w-full md:w-96 text-black" ref={form} onSubmit={sendEmail}>
            {/* Input for full name */}
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="p-2 rounded-md mb-4"
            />
            {/* Input for email */}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-2 rounded-md mb-4"
            />
            {/* Textarea for message */}
            <textarea
              name="message"
              rows="8"
              placeholder="Your message"
              required
              className="p-2 rounded-md mb-4"
            ></textarea>
            {/* Button to submit the form */}
            <button
              type="submit"
              className="py-2 px-4 bg-secondary w-max rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
