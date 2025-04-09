import React, { useState } from 'react';
import { Search, Filter, Briefcase, Building, Clock, MapPin } from 'lucide-react';

export default function ExploreOpportunities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const opportunities = [
    {
      title: "AI Development Project",
      company: "TechCorp Solutions",
      location: "Remote",
      duration: "12 weeks",
      type: "Technology",
      description: "Work on implementing AI solutions for a leading tech company.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Marketing Campaign Strategy",
      company: "Global Marketing Inc",
      location: "New York, NY",
      duration: "8 weeks",
      type: "Marketing",
      description: "Develop and execute digital marketing strategies for a Fortune 500 company.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Financial Analysis Project",
      company: "Investment Partners LLC",
      location: "Chicago, IL",
      duration: "10 weeks",
      type: "Finance",
      description: "Conduct financial analysis and research for investment decisions.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "UX Research Study",
      company: "Design Innovation Co",
      location: "San Francisco, CA",
      duration: "6 weeks",
      type: "Design",
      description: "Conduct user research and usability testing for a new product.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filters = ['all', 'Technology', 'Marketing', 'Finance', 'Design'];

  const filteredOpportunities = opportunities.filter(opp => 
    (selectedFilter === 'all' || opp.type === selectedFilter) &&
    (opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     opp.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore Opportunities
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find the perfect project or internship to advance your career and gain real-world experience.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter className="text-gray-400" />
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter === 'all' ? 'All Opportunities' : filter}
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={opportunity.image}
                  alt={opportunity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                  {opportunity.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building className="h-4 w-4 mr-2" />
                  {opportunity.company}
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  {opportunity.location}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  {opportunity.duration}
                </div>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}