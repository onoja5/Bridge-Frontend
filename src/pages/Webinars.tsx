import React from 'react';

const Webinars = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Webinars
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join our webinars to learn from industry experts and stay updated on the latest trends.
          </p>
        </div>
      </div>
    </div>

    {/* Upcoming Webinars Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Upcoming Webinars</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AI in Education</h3>
            <p className="text-gray-600">Join us for a webinar on the impact of AI in education and how it is transforming the learning experience.</p>
            <p className="text-gray-600">Date: November 15, 2023</p>
            <p className="text-gray-600">Time: 2:00 PM - 3:00 PM EST</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Career Development Strategies</h3>
            <p className="text-gray-600">Learn about effective career development strategies and how to navigate the job market.</p>
            <p className="text-gray-600">Date: December 10, 2023</p>
            <p className="text-gray-600">Time: 1:00 PM - 2:00 PM EST</p>
          </div>
        </div>
      </div>
    </div>

    {/* Past Webinars Section */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Past Webinars</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Future of Work</h3>
            <p className="text-gray-600">Explore the future of work and how technology is shaping the job market.</p>
            <p className="text-gray-600">Date: October 20, 2023</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Building a Successful Career</h3>
            <p className="text-gray-600">Gain insights on building a successful career from industry leaders.</p>
            <p className="text-gray-600">Date: September 15, 2023</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-6 text-center">
          If you have any questions or need further information about our webinars, please contact us.
        </p>
        <div className="text-center">
          <a
            href="mailto:webinars@bridgeai.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Webinars;
