import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts, featuredPost } from '../data/posts';

export default function Blog() {
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
                  to={`/blog/${featuredPost.slug}`}
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
                    to={`/blog/${post.slug}`}
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

      {/* Newsletter Section (keep existing code) */}
    </div>
  );
}