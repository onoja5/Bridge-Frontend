import React from 'react';

const Help = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Find answers to your questions and get the support you need.
          </p>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">How do I reset my password?</h3>
            <p className="text-gray-600">To reset your password, go to the Forgot Password page and enter your email address. You will receive a link to reset your password.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">How can I contact support?</h3>
            <p className="text-gray-600">You can contact our support team by emailing support@bridgeai.com or by filling out the contact form on our Contact page.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Where can I find tutorials and guides?</h3>
            <p className="text-gray-600">Our Help Center includes a variety of tutorials and guides to help you get started. Visit the Tutorials section for more information.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Contact Section */}
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Contact Us</h2>
        <p className="text-xl text-gray-600 mb-6 text-center">
          If you have any questions or need further assistance, please don't hesitate to reach out to us.
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

export default Help;
