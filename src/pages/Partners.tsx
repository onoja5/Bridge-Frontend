import React from 'react';
import SEO from '@/components/SEO/SEO'; // Import the SEO component

const Partners = () => (
  <div className="min-h-screen flex items-center justify-center">
    {/* SEO Component for rich link previews */}
    <SEO
      title="Our Partners - Bridge AI"
      description="Discover the trusted partners of Bridge AI who collaborate with us to empower students, educators, and businesses for a brighter future."
      url="https://bridge.ayoks.com/partners"
      image="https://bridge.ayoks.com/images/partners-og.png" // Replace with actual image URL
    />
    
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Partners</h1>
      <p className="text-gray-600">Meet our partners who help us drive innovation and success in career development.</p>
      {/* You can add partner logos or any partner details below */}
    </div>
  </div>
);

export default Partners;
