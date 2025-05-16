import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { posts, BlogPostType } from '../data/posts';
import DOMPurify from 'dompurify';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((post: BlogPostType) => post.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const cleanContent = DOMPurify.sanitize(post.content);

  return (
    <div className="min-h-screen bg-gray-50"> {/* Added background color */}
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-blue-100">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-4">{post.date}</span>
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8"> {/* Added container */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-12"
          />
          <div 
            className="prose lg:prose-xl max-w-none" // Removed max-width constraint
            dangerouslySetInnerHTML={{ __html: cleanContent }} 
          />
          <div className="mt-16 text-center">
            <a
              href="/blog"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;