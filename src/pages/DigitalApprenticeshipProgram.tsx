import React from 'react';
import { Link } from 'react-router-dom';

const DigitalApprenticeshipProgram = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Apprenticeship & Mentorship Program
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            A 3–6 month industry-aligned apprenticeship that allows participants to gain real-world experience while being mentored by experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Overview Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Program Overview</h2>
        <p className="text-xl text-gray-600 mb-6 text-center">
          This program is designed for aspiring professionals looking for hands-on experience. Gain real-world exposure and mentorship to accelerate your career.
        </p>
      </div>
    </div>

    {/* Key Components Section */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Key Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xl text-gray-600 space-y-4">
              <p>✅ Work on live industry projects</p>
              <p>✅ AI-powered skill tracking & personalized learning</p>
              <p>✅ Monthly mentor check-ins & feedback sessions</p>
              <p>✅ Internship & job placement support</p>
              <p>✅ 1:1 career coaching & personalized advice</p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8761637/pexels-photo-8761637.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
              alt="Digital Apprenticeship Program"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Join the Digital Apprenticeship & Mentorship Program and gain the skills and experience you need to succeed in your career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Apply Now
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DigitalApprenticeshipProgram;