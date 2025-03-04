import React from 'react';
import { Briefcase, Rocket, GraduationCap, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const openings = [
    {
      title: "Frontend Developer",
      type: "Full-Time · Remote",
      description: "Build intuitive interfaces that connect students with industry opportunities",
      icon: Zap
    },
    {
      title: "Education Specialist",
      type: "Contract · Hybrid",
      description: "Develop curriculum partnerships with universities and employers",
      icon: GraduationCap
    },
    {
      title: "Growth Manager",
      type: "Full-Time · On-site",
      description: "Expand our network of industry partners and educational institutions",
      icon: Users
    },
    {
      title: "Product Manager",
      type: "Full-Time · Remote",
      description: "Lead the development of our core platform experience",
      icon: Rocket
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Salary + equity options in a fast-growing startup"
    },
    {
      title: "Learning Budget",
      description: "$2,000 annual budget for professional development"
    },
    {
      title: "Flexible Work",
      description: "Remote-friendly with flexible hours and unlimited PTO"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shape the Future of Education
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join our mission to bridge education and industry through technology and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Join Bridge?</h2>
              <p className="text-xl text-gray-600 mb-6">
                We're building more than a platform - we're creating a movement that transforms how students gain 
                real-world experience. As part of our team, you'll directly contribute to shaping the future of 
                education and workforce development.
              </p>
              <p className="text-xl text-gray-600">
                Since 2020, we've grown to support over 500,000 students across 3 continents, and we're just 
                getting started. Join us to make an impact at scale while growing your career in a supportive, 
                innovative environment.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Current Openings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <job.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-500 mb-4">{job.type}</p>
                <p className="text-gray-600 mb-6">{job.description}</p>
                <button className="text-blue-900 font-semibold hover:text-blue-700 transition">
                  Apply Now <ArrowRight className="inline-block ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Culture
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We value curiosity, collaboration, and commitment to impact. Join a team that celebrates innovation
            and supports your professional growth at every stage.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {['🚀 Ship Often', '🤝 Trust First', '🎓 Learn Always', '❤️ Students First'].map((value, index) => (
              <div key={index} className="text-white p-4">
                <div className="text-3xl mb-4">{value.split(' ')[0]}</div>
                <div className="text-lg">{value.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Even if you don't see the perfect role, we're always looking for passionate people to join our mission.
          </p>
          <Link
            to="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300 inline-block"
          >
            Get in Touch <ArrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}