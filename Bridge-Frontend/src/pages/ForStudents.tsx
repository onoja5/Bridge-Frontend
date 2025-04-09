import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Briefcase, Star, CheckCircle, Target, Users, Info } from 'lucide-react';

export default function ForStudents() {
  const benefits = [
    {
      title: "Real-World Experience",
      description: "Work on actual projects from leading companies and build your portfolio",
      icon: Briefcase
    },
    {
      title: "Career Development",
      description: "Gain practical skills and prepare for your future career",
      icon: Target
    },
    {
      title: "Professional Network",
      description: "Connect with industry professionals and potential employers",
      icon: Users
    }
  ];

  const opportunities = [
    {
      title: "Technology Projects",
      description: "Work on cutting-edge tech projects with industry leaders",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/explore/technology"
    },
    {
      title: "Business Consulting",
      description: "Help organizations solve real business challenges",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/explore/consulting"
    },
    {
      title: "Creative Projects",
      description: "Design and create innovative solutions",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      path: "/explore/creative"
    }
  ];

  const features = [
    "Flexible scheduling",
    "Remote work options",
    "Professional mentorship",
    "Academic credit",
    "Skills development",
    "Career guidance"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      university: "Stanford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "The hands-on experience I gained through BridgeAI projects has been invaluable for my career development."
    },
    {
      name: "Michael Lee",
      role: "Business Major",
      university: "NYU",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
      quote: "Working on real projects helped me understand what employers are looking for and build my professional network."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Launch Your Career with Real Experience
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Gain practical skills, build your portfolio, and connect with potential employers 
              through hands-on projects and internships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Explore Opportunities <ArrowRight className="inline-block ml-2" />
              </Link>
              <Link
                to="/signup"
                className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
              >
                Sign Up Now
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
              <GraduationCap className="h-12 w-12 text-blue-600 mb-2" />
              <p className="text-gray-700">Personalized Career Roadmaps</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-blue-600 mb-2" />
              <p className="text-gray-700">Project-Based Learning</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-2" />
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
              <div className="text-gray-600">Projects Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">92%</div>
              <div className="text-gray-600">Employment Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">680+</div>
              <div className="text-gray-600">Partner Companies</div>
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

      {/* Opportunities Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Available Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <Link
                  to={opportunity.path}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Program Features</h2>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Program features"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.university}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of students who are gaining real-world experience through BridgeAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started Now
            </Link>
            <Link
              to="/explore"
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}