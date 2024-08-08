// HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">JWT test</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li>
                <a 
                    href="#contact" 
                    className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                >
                    Signout
                </a>
                </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-500 text-white flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to JWT test</h2>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-lg mb-6 text-center">We are committed to delivering the best services to our clients. Our team of experts is here to help you achieve your goals.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service One</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet consec</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Two</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet consec</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Service Three</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet consec</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© JWT Test. All rights reserved.</p>
          <a href="mailto:contact@mywebsite.com" className="hover:underline">contact@mywebsite.com</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
