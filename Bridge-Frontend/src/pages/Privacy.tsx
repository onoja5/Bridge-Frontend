// src/pages/Privacy.tsx
import React from 'react';
import { Shield, Lock, Database, UserCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  const principles = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement industry-standard security measures to safeguard your information"
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "All sensitive data is encrypted both in transit and at rest"
    },
    {
      icon: Database,
      title: "Minimal Collection",
      description: "We only collect data essential for providing our services"
    },
    {
      icon: UserCheck,
      title: "Your Control",
      description: "You maintain ownership and control of your personal data"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trust is our priority. Learn how we protect and manage your data.
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-blue-900">
            Last Updated: Febraury 2025.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-600 mb-8">
              At Bridge AI, we are committed to protecting your privacy. This policy outlines how we collect,
              use, and safeguard your information when you use our platform and services.
            </p>

            <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>
            <p className="text-gray-600 mb-8">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Account registration details</li>
              <li>Platform usage data</li>
              <li>Communication records</li>
              <li>Technical information (IP address, device info)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">How We Use Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                "Provide and improve our services",
                "Personalize user experience",
                "Communicate important updates",
                "Ensure platform security"
              ].map((use, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">{use}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Data Protection Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {principles.map((principle, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-8">
              You have the right to access, correct, or delete your personal data. Contact us at any time to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "Request data access",
                "Update personal information",
                "Delete your account",
                "Opt-out of communications"
              ].map((right, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 font-semibold mr-2">✓</span>
                  <span className="text-gray-600">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact our privacy team with any questions or requests regarding your data.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300 inline-block"
          >
            Contact Us <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}