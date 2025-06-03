import React from 'react';
import { ArrowRight, Users, Target, Briefcase, CheckCircle, Star, Building, Info, TrendingUp, ClipboardList, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO/SEO'; // Import the SEO component

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
      {/* SEO Component for rich link previews */}
      <SEO 
        title="For Employers - Bridge AI Talent Solutions"
        description="Connect with top students and graduates through Bridge AI. Access skilled talent, drive innovation, and build your talent pipeline at no cost."
        url="https://bridge.ayoks.com/for-employers"
      />
      
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

      {/* About This Project Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 flex justify-center items-center">
            <Info className="h-8 w-8 text-blue-600 mr-2" />
            About This Project
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our AI-driven platform empowers the workforce of tomorrow by bridging the gap between formal education and the evolving demands of the workplace. Students and graduates get AI-driven personalized career roadmaps, project-based learning, personalized skill development, and mentorship from seasoned professionals. For employers, the platform serves as a reliable pipeline for fresh, skilled, and job-ready talent, fostering a mutually beneficial ecosystem for professional and business growth.
          </p>
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-2" />
              <p className="text-gray-700">AI-Driven Insights</p>
            </div>
            <div className="flex flex-col items-center">
              <ClipboardList className="h-12 w-12 text-blue-600 mb-2" />
              <p className="text-gray-700">Project-Based Learning</p>
            </div>
            <div className="flex flex-col items-center">
              <UserCheck className="h-12 w-12 text-blue-600 mb-2" />
              <p className="text-gray-700">Professional Mentorship</p>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            Join us in redefining career development—one personalized blueprint at a time. Let’s build the bridge from education to employment.
          </p>
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

      {/* Hear from Real Users Section */}
      <div className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Hear from Real BridgeAI Users</h2>
              <p className="text-lg mb-8">
                "One of my biggest concerns has to do with our online classes being able to provide students with real-life, hands-on learning experiences. So, when I looked at BridgeAI, it was very exciting for me, because it's a way for our classes and students to connect with thousands of businesses, nonprofits, and government agencies."
              </p>
              <p className="font-semibold">Jeff Holm</p>
              <p className="text-sm text-gray-300">Vice Provost for Strategic Programming & Special Initiatives</p>
              <p className="text-sm text-gray-300">University of North Dakota</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="BridgeAI Users"
                className="rounded-lg shadow-lg"
              />
            </div>
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
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}