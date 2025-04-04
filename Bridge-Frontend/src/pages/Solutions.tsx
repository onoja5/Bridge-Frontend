import React from 'react';
import { ArrowRight, Users, Building, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      title: "For Students",
      description: "Gain real-world experience and build your professional portfolio through hands-on projects.",
      icon: GraduationCap,
      features: [
        "Access to real industry projects",
        "Build professional portfolio",
        "Earn academic credit",
        "Network with employers"
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      path: "/for-students"
    },
    {
      title: "For Educators",
      description: "Enhance your curriculum with real-world projects and provide students with practical experience.",
      icon: Users,
      features: [
        "Industry-aligned curriculum",
        "Project management tools",
        "Student progress tracking",
        "Employer partnerships"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      path: "/for-educators"
    },
    {
      title: "For Employers",
      description: "Connect with talented students and get fresh perspectives on your business challenges.",
      icon: Building,
      features: [
        "Access student talent pool",
        "Project management platform",
        "Quality assurance",
        "Recruitment opportunities"
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      path: "/for-employers"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Solutions for Everyone
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Whether you're a student, educator, or employer, Aignite has the tools and resources you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {solutions.map((solution, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                    <solution.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-4 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={solution.path}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Learn More <ArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="flex-1">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Experience?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our platform and start connecting with opportunities that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}