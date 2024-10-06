import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header></Header>
      <div className="container mx-auto p-8 space-y-8">
        <header>
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4">
            At Nature Explorer, we are passionate about promoting awareness and
            appreciation for the natural world.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="mt-2">
            Our mission is to educate and inspire people to connect with nature.
            We believe that by fostering a deeper understanding of our
            environment, we can motivate individuals to protect and preserve it
            for future generations.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Our Values</h2>
          <ul className="mt-2 list-disc list-inside">
            <li>
              <strong>Respect:</strong> We respect all forms of life and strive
              to promote harmony between humans and nature.
            </li>
            <li>
              <strong>Education:</strong> We believe that knowledge is the key
              to conservation and sustainable living.
            </li>
            <li>
              <strong>Community:</strong> We are committed to building a
              community of nature enthusiasts who share our passion.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Jane Doe</h3>
              <p className="mt-1">Founder & CEO</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">John Smith</h3>
              <p className="mt-1">Environmental Scientist</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Emily Johnson</h3>
              <p className="mt-1">Community Outreach Coordinator</p>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
