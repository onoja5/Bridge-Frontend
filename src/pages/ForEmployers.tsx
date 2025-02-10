import React from 'react';
import { ArrowRight, Users, Target, Briefcase, CheckCircle, Star, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForEmployers() {
  const benefits = [
    {
      title: "Access Top Talent",
      description: "Connect with motivated students from leading educational institutions",
      icon: Users
    },
    {
      title: "Drive Innovation",
      description: "Get fresh perspectives and innovative solutions for your projects",
      icon: Target
    },
    {
      title: "Cost-Effective",
      description: "Complete projects while developing future talent - all at no cost",
      icon: Briefcase
    }
  ];

  const successStories = [
    {
      company: "TechCorp Solutions",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "Working with BridgeAI students has brought fresh perspectives to our projects and helped us identify top talent for our team.",
      author: "Sarah Johnson",
      role: "Head of Innovation"
    },
    {
      company: "Global Finance Inc.",
      logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "The quality of work and professionalism from BridgeAI students has consistently exceeded our expectations.",
      author: "Michael Chen",
      role: "VP of Operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Talent Pipeline
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connect with motivated students and recent graduates while getting your projects done. 
              Build your talent pipeline with real-world collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/post-project"
                className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Post a Project <ArrowRight className="inline-block ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
              >
                Contact Sales
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
              <div className="text-4xl font-bold text-blue-600 mb-2">40K+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">2.5K+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Partner with BridgeAI?</h2>
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

      {/* How It Works Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Post Your Project</h3>
              <p className="text-gray-600">
                Share your project requirements and desired outcomes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Match with Talent</h3>
              <p className="text-gray-600">
                Get matched with qualified students based on skills and interests
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaborate & Succeed</h3>
              <p className="text-gray-600">
                Work together on projects and identify potential future employees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{story.company}</h4>
                    <p className="text-gray-600 text-sm">{story.author}</p>
                    <p className="text-gray-500 text-sm">{story.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{story.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Talent Pipeline?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join leading companies who are already benefiting from BridgeAI's talent network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/post-project"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Post Your First Project
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}