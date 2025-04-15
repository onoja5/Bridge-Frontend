import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const featuredPost = {
    title: "Project-Based Learning: The Key to Gaining Real-World Experience",
    excerpt: "Now, let's ditch the textbooks for a minute and talk about getting our hands dirty! You know that feeling of actually doing something, building something real? That's where project-based learning comes in, and trust me, it's a game-changer.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "March 15, 2024",
    author: "Sarah Johnson",
    category: "Education"
  };

  const posts = [
    {
      title: "Unlocking Your Potential: Why Personalized Career Blueprints Matter More Than Ever",
      excerpt: "Okay, let's talk about you. Not the generic, 'everyone' you, but the unique you, with your own specific talents, dreams, and quirks.",
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      author: "Michael Chen",
      category: "Career Development"
    },
    {
      title: "From Learning to Earning: How AI-Powered Career Roadmaps Can Accelerate Your Growth",
      excerpt: "My friend, let's cut to the chase: you want to go from 'learning' to 'earning,' and you want to do it fast. Enter AI-powered career roadmaps – your turbocharged GPS for professional growth.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      category: "Partnerships"
    },
    {
      title: "Bridging the Gap: How AI is Revolutionizing Career Development for Students and Professionals",
      excerpt: "Alright folks, buckle up, because we're about to dive into something truly mind-blowing! You know that feeling when you're staring at a career path, and it looks like a tangled mess of spaghetti?",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 1, 2024",
      author: "David Kim",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay up to date with the latest trends in experiential learning, 
              industry insights, and success stories from our community.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>{featuredPost.author}</span>
                </div>
                <Link
                  to="/blog/post"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    to="/blog/post"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 mb-8">
              Get the latest insights and updates delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}