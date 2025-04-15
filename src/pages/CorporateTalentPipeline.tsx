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
              Corporate Talent Pipeline Program
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Target Audience: Employers & corporate partners
              Overview: A structured recruitment & upskilling initiative connecting companies with job-ready talent trained through BridgeAI.
            </p>
          </div>
        </div>
      </div>

      {/* Key Components Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-xl text-gray-600 space-y-4">
              <p>✅ AI-powered talent matching & hiring solutions</p>
              <p>✅ Onboarding & skill gap assessments</p>
              <p>✅ Custom corporate learning paths</p>
              <p>✅ Internship-to-full-time job pipeline</p>
              <p>✅ Employer branding & industry collaboration</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Corporate Talent Pipeline"
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
            Ready to Shape the Future of AI?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the AI Ignite Community and connect with like-minded professionals to lead in the age of AI.
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
