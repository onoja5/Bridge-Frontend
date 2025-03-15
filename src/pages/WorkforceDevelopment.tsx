import React from 'react';
import { Link } from 'react-router-dom';

const WorkforceDevelopment = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Workforce Development
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empowering individuals with the skills and knowledge needed to thrive in today's job market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Explore Programs
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
          Our Workforce Development program is designed to bridge the gap between education and employment. We provide hands-on training, mentorship, and career support to help individuals succeed in their chosen fields.
        </p>
      </div>
    </div>

    {/* Benefits Section */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Program Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Industry-Aligned Skills</h3>
            <p className="text-gray-600">Develop skills that match current industry needs and demands.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Career Advancement</h3>
            <p className="text-gray-600">Create pathways for career growth and professional development.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Network Building</h3>
            <p className="text-gray-600">Connect with industry professionals and potential employers.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Program Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="list-disc list-inside text-xl text-gray-600 space-y-4">
              <li>Customized learning paths</li>
              <li>Real-world projects</li>
              <li>Industry mentorship</li>
              <li>Skills assessment</li>
              <li>Progress tracking</li>
              <li>Certification preparation</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Program features"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    {/*
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
                alt="David Wilson"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">David Wilson</h4>
                <p className="text-gray-600 text-sm">Program Graduate</p>
                <p className="text-gray-500 text-sm">Now at: Tech Solutions Inc</p>
              </div>
            </div>
            <p className="text-gray-600">"The workforce development program gave me the skills and confidence to transition into tech."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
                alt="Maria Rodriguez"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Maria Rodriguez</h4>
                <p className="text-gray-600 text-sm">Career Changer</p>
                <p className="text-gray-500 text-sm">Now at: Global Finance Corp</p>
              </div>
            </div>
            <p className="text-gray-600">"This program was instrumental in helping me successfully switch careers."</p>
          </div>
        </div>
      </div>
    </div>
    */}

    {/* CTA Section */}
    <div className="bg-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Advance Your Career?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Join our workforce development program and take the first step towards your new career.
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
            Schedule a Call
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default WorkforceDevelopment;