import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  GraduationCap,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO/SEO'; // Import the SEO component

export default function HowItWorks() {
  const steps = [
    {
      title: 'Sign Up & Build Your Profile',
      description:
        'Get started by signing up with Google, LinkedIn, or email. Complete your profile by sharing:',
      bullets: [
        'Your academic background & career interests',
        'Existing skills & experience',
        'Career aspirations & learning preferences',
      ],
      emoji: '🚀',
      image:
        'https://images.pexels.com/photos/5257892/pexels-photo-5257892.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gradient-to-r from-blue-50 to-white',
    },
    {
      title: 'Get Your Personalized Career Blueprint',
      description:
        'BridgeAI’s intelligent system generates a custom career roadmap tailored to your goals.',
      bullets: [
        'AI-driven career path recommendations',
        'Skill gap analysis to identify areas for growth',
        'Industry trends & insights to future-proof your career',
      ],
      emoji: '🔍',
      image:
        'https://images.pexels.com/photos/9488847/pexels-photo-9488847.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gray-50',
    },
    {
      title: 'Learn & Upskill with Targeted Resources',
      description: 'Gain job-ready skills through a curated mix of:',
      bullets: [
        'Online courses, bootcamps & certifications',
        'Project-based learning for hands-on experience',
        'AI-powered job simulations to test real-world skills',
      ],
      emoji: '📚',
      image:
        'https://images.pexels.com/photos/1181431/pexels-photo-1181431.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gradient-to-r from-blue-50 to-white',
    },
    {
      title: 'Connect with Mentors & Industry Experts',
      description:
        'Advance your career with guidance from experienced professionals.',
      bullets: [
        'Get matched with mentors in your field',
        'Access 1:1 coaching, career webinars & expert Q&As',
        'Receive resume reviews & interview prep support',
      ],
      emoji: '🤝',
      image:
        'https://images.pexels.com/photos/5717570/pexels-photo-5717570.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gray-50',
    },
    {
      title: 'Unlock Career Opportunities',
      description: 'Turn your learning into real-world success with access to:',
      bullets: [
        'Internships & apprenticeships with top companies',
        'Live industry projects to showcase your skills',
        'AI-powered job matching based on your evolving skills & interests',
      ],
      emoji: '💼',
      image:
        'https://images.pexels.com/photos/5940828/pexels-photo-5940828.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gradient-to-r from-blue-50 to-white',
    },
    {
      title: 'Track Your Progress & Stay Ahead',
      description:
        'Monitor your skill growth and adapt your career plan as your goals evolve.',
      bullets: [
        'Monitor your skill growth & completed courses',
        'Get personalized recommendations for continued upskilling',
        'Adapt your career plan as your goals evolve',
      ],
      emoji: '📊',
      image:
        'https://images.pexels.com/photos/4559683/pexels-photo-4559683.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
      bgClass: 'bg-gray-50',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Component for rich link previews */}
      <SEO
        title="How Bridge AI Works – Revolutionizing Career Development"
        description="Discover how BridgeAI bridges the gap between education and the job market using AI to guide career development, learning, and opportunities."
        url="https://bridge.ayoks.com/how-it-works"
        image="https://bridge.ayoks.com/images/how-it-works-og.png" // Replace with actual image URL
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Bridge AI Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              BridgeAI is your personalized career companion, designed to bridge
              the gap between education and the evolving job market. Using
              AI-driven insights, we help students and professionals discover,
              develop, and deploy their skills for real-world opportunities.
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      {steps.map((step, index) => (
        <div key={index} className={`${step.bgClass} py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                <div className="space-y-4">
                  {step.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-500" />
                      <span className="text-base text-gray-700">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Why BridgeAI Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why BridgeAI?</h2>
            <p className="text-lg mb-6">
              BridgeAI offers a unique blend of AI-powered career planning,
              hands-on learning, and mentorship to help you achieve your goals.
            </p>
            <div className="space-y-4">
              {[
                'AI-powered career planning tailored to you',
                'Hands-on learning through real-world projects',
                'Mentorship & networking with industry professionals',
                'Job-ready training to secure high-impact opportunities',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <span className="text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <p className="text-lg">1. AI-Powered Career Personalization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <p className="text-lg">2. VIP Access to Mentors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <p className="text-lg">3. Job Matching Engine</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg">
              <p className="text-lg">4. Resume-Building Automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of students, educators, and employers who are already
            benefiting from Bridge AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Sign Up Now <ArrowRight className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition duration-300"
            >
              Contact Us <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
