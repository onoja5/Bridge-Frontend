import React from 'react';
import { Link } from 'react-router-dom';

export default function CorporateTalentPipeline() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Corporate Talent Pipeline
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Build a sustainable talent pipeline for your organization with our tailored corporate programs.
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
            The Corporate Talent Pipeline program is designed to help organizations identify, train, and retain top talent. Through customized training and mentorship, we ensure your workforce is ready to meet the challenges of tomorrow.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Customized Training</h3>
              <p className="text-gray-600">Tailored programs to meet your organization's specific needs.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Talent Retention</h3>
              <p className="text-gray-600">Strategies to retain top talent and reduce turnover.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Leadership Development</h3>
              <p className="text-gray-600">Prepare your workforce for leadership roles with targeted training.</p>
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
                <li>Customizable training modules</li>
                <li>Access to industry experts</li>
                <li>Real-world case studies</li>
                <li>Comprehensive performance tracking</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Corporate training"
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
            Ready to Build Your Talent Pipeline?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Partner with us to create a sustainable talent pipeline for your organization.
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
}
