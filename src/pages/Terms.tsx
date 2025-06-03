// src/pages/Terms.tsx
import React from 'react';
import { Scale, AlertOctagon, BookOpen, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO/SEO'; // Import the SEO component

export default function Terms() {
  const clauses = [
    {
      icon: Scale,
      title: "Governing Law",
      description: "These terms are governed by the laws of the State of California"
    },
    {
      icon: AlertOctagon,
      title: "Termination",
      description: "We reserve the right to terminate access for violations of these terms"
    },
    {
      icon: BookOpen,
      title: "Content License",
      description: "You grant us a non-exclusive license to use content you post on the platform"
    },
    {
      icon: Shield,
      title: "Liability",
      description: "Our liability is limited to the maximum extent permitted by law"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Component for rich link previews */}
      <SEO
        title="Terms of Service - Bridge AI"
        description="Read the terms and conditions for using Bridge AI's platform. Learn about our policies on data usage, content ownership, liability, and more."
        url="https://bridge.ayoks.com/terms"
        image="https://bridge.ayoks.com/images/terms-og.png" // Replace with actual image URL
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using our platform
            </p>
          </div>
        </div>
      </div>

      {/* Last Updated */}
      <div className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-blue-900">
            Effective Date: February 2025.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <p className="text-gray-600 mb-8">
              These Terms of Service govern your use of the Bridge AI platform. By accessing or using our services,
              you agree to be bound by these terms and our Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold mb-6">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-8">
              You must be at least 16 years old to use our services. By using Bridge AI, you represent that you:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-600">
              <li>Are capable of forming a binding contract</li>
              <li>Will comply with these terms and all applicable laws</li>
              <li>Will not engage in unauthorized use of the platform</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">User Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                "Maintain account security",
                "Provide accurate information",
                "Report suspicious activity",
                "Respect intellectual property rights"
              ].map((responsibility, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <ArrowRight className="h-6 w-6 text-blue-600 mr-4" />
                  <span className="text-gray-600">{responsibility}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Key Clauses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {clauses.map((clause, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                    <clause.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{clause.title}</h3>
                  <p className="text-gray-600">{clause.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6">Modifications</h2>
            <p className="text-gray-600 mb-8">
              We may update these terms periodically. Continued use after changes constitutes acceptance of the
              modified terms. We will notify users of significant changes through our platform or email.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact our legal team for any clarifications regarding these terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Legal <ArrowRight className="inline-block ml-2" />
            </Link>
            <Link
              to="/privacy"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              View Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
