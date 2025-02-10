import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Briefcase, Star, CheckCircle } from 'lucide-react';

export default function ForStudents() {
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

  return (
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
  );
}