import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Users, School, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForEducators() {
  const benefits = [
    {
      title: "Enhanced Curriculum",
      description: "Integrate real-world projects into your courses and provide students with practical experience",
      icon: BookOpen
    },
    {
      title: "Industry Connections",
      description: "Build relationships with leading companies and organizations in your field",
      icon: Users
    },
    {
      title: "Student Success",
      description: "Improve student outcomes and employability through hands-on learning",
      icon: GraduationCap
    }
  ];

  const features = [
    "Project management tools",
    "Student progress tracking",
    "Industry partner network",
    "Assessment frameworks",
    "Learning analytics",
    "Support and resources"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Teaching
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Enhance your curriculum with real-world projects and provide students with 
              the practical experience they need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Book a Demo <ArrowRight className="inline-block ml-2" />
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

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">640+</div>
              <div className="text-gray-600">Educational Institutions</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">13.3M+</div>
              <div className="text-gray-600">Hours of Applied Learning</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-gray-600">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose BridgeAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Everything You Need</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Educator dashboard"
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
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join leading educators who are already using BridgeAI to enhance their curriculum 
            and improve student outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}