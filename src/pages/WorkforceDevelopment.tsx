import React from 'react';
import { Link } from 'react-router-dom';

const WorkforceDevelopment = () => (
  <div className='min-h-screen'>
    {/* Hero Section */}
    <div className='bg-gradient-to-r from-blue-900 to-blue-800 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            AI Ignite Community
          </h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto mb-8'>
            Target Audience: AI & Tech professionals, business leaders, and AI
            enthusiasts Overview: A community-driven platform where
            professionals connect to learn, share, and lead in the age of AI.
            This initiative fosters discussions, innovation, and collaboration
            between AI technologists, entrepreneurs, and thought leaders.
          </p>
        </div>
      </div>
    </div>

    {/* Key Components Section */}
    <div className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-16'>Key Components</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div>
            <div className='text-xl text-gray-600 space-y-4'>
              <p>✅ AI & Tech Networking Events</p>
              <p>✅ Monthly knowledge-sharing sessions & hackathons</p>
              <p>✅ Exclusive industry insights & trend analysis</p>
              <p>✅ Business and tech mentorship for AI adoption</p>
              <p>✅ Open-source collaboration & idea incubation</p>
            </div>
          </div>
          <div>
            <img
              src='https://images.pexels.com/photos/7648221/pexels-photo-7648221.jpeg?auto=compress&cs=tinysrgb&w=800&q=80'
              alt='AI Ignite Community'
              className='rounded-lg shadow-xl'
            />
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className='bg-blue-900 py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-4xl font-bold text-white mb-6'>
          Ready to Shape the Future of AI?
        </h2>
        <p className='text-xl text-blue-100 max-w-3xl mx-auto mb-8'>
          Join the AI Ignite Community and connect with like-minded
          professionals to lead in the age of AI.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/dashboard'
            className='bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300'
          >
            Apply Now
          </Link>
          <Link
            to='/contact'
            className='border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default WorkforceDevelopment;
