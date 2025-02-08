import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const offices = [
    {
      city: "Abuja",
      address: "No 5, Wuse zone 5, Abuja, Nigeria",
      phone: "+234 808 800 4416",
      email: "hello@aignite.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      city: "Lagos",
      address: "No 11, Lagos Island, Lagos, Nigeria",
      phone: "+234 808 800 4416",
      email: "hello@aignite.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                 </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Our Offices</h2>
            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 bg-gray-200">
        {/* Add map integration here */}
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Map integration would go here
        </div>
      </div>
    </div>
  );
}