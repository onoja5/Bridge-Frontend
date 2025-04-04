import React from 'react';
import { Users, Target, Heart, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Education",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in the power of community and collaboration to drive meaningful change in education."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push boundaries to create better ways of connecting education with industry."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We measure our success by the positive impact we create for students, educators, and employers."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We strive to make quality experiential learning opportunities accessible to everyone."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are on a mission to empower tomorrow's workforce by revolutionizing how students and young professionals navigate their careers. BridgeAI bridges the gap between formal education and the evolving workplace, using AI-driven insights to provide personalized career roadmaps, mentorship, and skill-building opportunities tailored to individual aspirations.
            </p>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Our Commitment to Your Success</h2>
              <p className="text-xl text-gray-600 mb-6 text-center md:text-left">
                We believe that every learner deserves a clear and guided path to success. By leveraging cutting-edge AI, we help users make informed career decisions, gain hands-on learning experiences, and connect with industry experts who provide real-world guidance.
              </p>
              <p className="text-xl text-gray-600 mb-6 text-center md:text-left">
                At the heart of BridgeAI is a commitment to empower the workforce of the future. We collaborate with educators, employers, and mentors to nurture talent, sharpen skills, and prepare the next generation for the future of work.
              </p>
              <p className="text-xl text-gray-600 text-center md:text-left">
                Join us in redefining career development—one personalized blueprint at a time. Let’s build the bridge from education to employment.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Objectives Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Business Objectives</h2>
          <ul className="list-disc list-inside text-xl text-gray-600 space-y-4">
            <li>Enable seamless transition from education to employment for learners.</li>
            <li>Provide AI-powered tools for personalized skills development and job matching.</li>
            <li>Foster partnerships with educational institutions and industry leaders to create a dynamic learning ecosystem.</li>
            <li>Continuously adapt learning models to meet evolving market demands.</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Shaping the Future of Education
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Be part of our mission to transform education through real-world experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              View Careers <ArrowRight className="inline-block ml-2" />
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
  );
}