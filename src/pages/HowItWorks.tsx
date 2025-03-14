import React from 'react';
import { ArrowRight, CheckCircle, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Set up your profile and specify your interests, skills, and goals. Our AI-powered system will match you with relevant opportunities.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Browse Opportunities",
      description: "Explore a wide range of projects, internships, and learning experiences from our network of 680+ partners.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Start Learning",
      description: "Engage in real-world projects, gain practical experience, and build your professional portfolio while earning academic credit.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Bridge AI Works
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our platform makes it easy to connect students with real-world learning opportunities. 
              Here's how we bring education and industry together.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">Easy to get started</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">Guided process</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                      <span className="text-gray-700">24/7 support</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Journey Section */}
      <div className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">User Journey for Students & Professionals</h2>
          <div className="space-y-16">
            {[
              {
                title: "Sign Up & Profile Setup",
                description: "Register using email or social login (Google, LinkedIn, Facebook). Complete profile with key details (academic background, experience, career interests)."
              },
              {
                title: "Career Blueprint & Personalized Roadmap",
                description: "Complete a survey to share details like background, skills, career goals, interests, and aspirations. AI generates a custom career blueprint with:",
                bullets: [
                  "Recommended career paths aligned with market demand.",
                  "Skill gap analysis and personalized learning recommendations.",
                  "Possible mentors or role models.",
                  "Projected industry trends to guide long-term planning."
                ]
              },
              {
                title: "Learning & Upskilling",
                description: "Enroll in recommended courses, certifications, and bootcamps. Engage in project-based learning with real-world applications. Participate in AI-powered job simulations to gain hands-on experience."
              },
              {
                title: "Mentorship & Career Guidance",
                description: "Get matched with mentors based on career aspirations and industry. Attend 1:1 mentorship sessions, career webinars, and expert panels. Receive resume reviews, interview prep, and career advice."
              },
              {
                title: "Career Opportunities & Industry Experience",
                description: "Apply for internships, apprenticeships, and full-time roles. Gain experience through industry projects and case studies. AI-powered job recommendations based on evolving skills and interests."
              },
              {
                title: "Progress Tracking & Continuous Growth",
                description: "AI monitors progress in skills, courses, and career milestones. Adaptive career roadmap refinements based on learning journey. Continuous upskilling recommendations for career advancement."
              }
            ].map((journey, index) => (
              <div key={index}>
                <h3 className="text-3xl font-semibold mb-4">{journey.title}</h3>
                <p className="text-xl text-gray-700 mb-6">{journey.description}</p>
                {journey.bullets && (
                  <div className="space-y-4">
                    {journey.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <span className="text-gray-700">{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
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
            Join thousands of students, educators, and employers who are already benefiting from Bridge AI platform.
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