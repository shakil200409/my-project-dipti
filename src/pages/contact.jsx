import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4">
          We would love to hear from you! Please fill out the form below.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label for="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label for="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label for="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
