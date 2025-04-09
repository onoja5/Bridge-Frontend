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
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Program Overview</h2>
          <p className="text-xl text-gray-600 mb-6 text-center">
            A structured recruitment & upskilling initiative connecting companies with job-ready talent trained through BridgeAI.
          </p>
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
    </div>
  );
}
