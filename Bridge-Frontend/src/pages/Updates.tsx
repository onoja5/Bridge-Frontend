import React from 'react';

const Updates = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Product Updates
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Stay informed about the latest updates and improvements to our products.
          </p>
        </div>
      </div>
    </div>

    {/* Updates Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Latest Updates</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">New Feature: AI-Powered Job Matching</h3>
            <p className="text-gray-600">We have introduced a new AI-powered job matching feature that helps users find the best job opportunities based on their skills and preferences.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Improved User Interface</h3>
            <p className="text-gray-600">Our user interface has been redesigned to provide a more intuitive and seamless experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
            <p className="text-gray-600">We have implemented enhanced security measures to protect your data and ensure a safe user experience.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Section */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-6 text-center">
          If you have any questions or feedback about our updates, please contact our support team.
        </p>
        <div className="text-center">
          <a
            href="mailto:support@bridgeai.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Updates;
