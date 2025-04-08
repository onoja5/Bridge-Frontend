import React from 'react';
import { Link } from 'react-router-dom';

export default function DigitalAfricaBootcamp() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Africa Bootcamp
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Empowering Africa's youth with digital skills to thrive in the global economy.
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
          <h2 className="text-3xl font-bold text-center mb-16">Digital Africa Bootcamp</h2>
          <p className="text-xl text-gray-600 mb-6 text-center">
            Target Audience: Final-year students, early-career professionals & career switchers
          </p>
          <p className="text-xl text-gray-600 mb-6 text-center">
            Overview: A 6–12 week immersive program designed to equip participants with AI-driven career roadmaps, real-world projects, and technical skills needed to thrive in the digital economy.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Digital Skills Training</h3>
              <p className="text-gray-600">Learn in-demand digital skills such as coding, data analysis, and digital marketing.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Real-World Projects</h3>
              <p className="text-gray-600">Work on real-world projects to build a portfolio that showcases your skills.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Mentorship</h3>
              <p className="text-gray-600">Receive guidance and support from experienced industry professionals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Key Components:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xl text-gray-600 space-y-4">
                <p>✅ AI-powered career assessment & personalized roadmap</p>
                <p>✅ Hands-on training in AI, cloud computing, data analytics & digital skills</p>
                <p>✅ Industry projects with real-world applications</p>
                <p>✅ Personalized mentorship from industry leaders</p>
                <p>✅ Resume reviews, mock interviews & job placement support</p>
                <p>✅ Certification upon completion</p>
              </div>
              <p className="text-xl text-gray-600 mt-6">
                Corporate Talent Pipeline Program
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5940828/pexels-photo-5940828.jpeg?auto=compress&cs=tinysrgb&w=800&q=80"
                alt="Program features"
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
            Ready to Join the Digital Revolution?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Enroll in the Digital Africa Bootcamp today and take the first step towards a successful digital career.
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
