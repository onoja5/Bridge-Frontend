import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutions = [
    { name: 'For Students', path: '/for-students' },
    { name: 'For Educators', path: '/for-educators' },
    { name: 'For Employers', path: '/for-employers' },
  ];

  const explore = [
    { name: 'Colleges & Universities', path: '/colleges' },
    { name: 'Businesses & Nonprofits', path: '/businesses' },
    { name: 'Students & Learners', path: '/learners' },
  ];

  const programs = [
    { name: 'Workforce Development', path: '/workforce-development' },
    { name: 'Work-Based Learning', path: '/work-based-learning' },
    { name: 'Project Internships', path: '/project-internships' },
  ];

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent click inside dropdown from closing it
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <Link to='/' className='flex items-center'>
              <span className='text-2xl font-bold text-blue-600'>
                Bridge AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              to='/how-it-works'
              className='text-gray-600 hover:text-blue-600'
            >
              How It Works
            </Link>

            {/* Solutions Dropdown */}
            <div className='relative' onClick={handleDropdownClick}>
              <button
                className='flex items-center text-gray-600 hover:text-blue-600'
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions <ChevronDown className='ml-1 h-4 w-4' />
              </button>
              {activeDropdown === 'solutions' && (
                <div className='absolute left-0 w-56 mt-2 bg-white rounded-md shadow-lg py-2'>
                  {solutions.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Explore Dropdown */}
            <div className='relative' onClick={handleDropdownClick}>
              <button
                className='flex items-center text-gray-600 hover:text-blue-600'
                onClick={() => toggleDropdown('explore')}
              >
                Explore <ChevronDown className='ml-1 h-4 w-4' />
              </button>
              {activeDropdown === 'explore' && (
                <div className='absolute left-0 w-56 mt-2 bg-white rounded-md shadow-lg py-2'>
                  {explore.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className='relative' onClick={handleDropdownClick}>
              <button
                className='flex items-center text-gray-600 hover:text-blue-600'
                onClick={() => toggleDropdown('programs')}
              >
                Programs <ChevronDown className='ml-1 h-4 w-4' />
              </button>
              {activeDropdown === 'programs' && (
                <div className='absolute left-0 w-56 mt-2 bg-white rounded-md shadow-lg py-2'>
                  {programs.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to='/about' className='text-gray-600 hover:text-blue-600'>
              About
            </Link>
            <Link to='/blog' className='text-gray-600 hover:text-blue-600'>
              Blog
            </Link>
            <Link to='/contact' className='text-gray-600 hover:text-blue-600'>
              Contact
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <Link to='/login' className='text-blue-600 hover:text-blue-700'>
              Log In
            </Link>
            <Link
              to='/signup'
              className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-blue-600'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/how-it-works'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600'
            >
              How It Works
            </Link>

            {/* Mobile Solutions */}
            <div className='space-y-1'>
              <button
                onClick={() => toggleDropdown('mobile-solutions')}
                className='flex items-center w-full px-3 py-2 text-gray-600 hover:text-blue-600'
              >
                Solutions <ChevronDown className='ml-2 h-4 w-4' />
              </button>
              {activeDropdown === 'mobile-solutions' && (
                <div className='pl-6 space-y-1'>
                  {solutions.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-3 py-2 text-gray-600 hover:text-blue-600'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Explore */}
            <div className='space-y-1'>
              <button
                onClick={() => toggleDropdown('mobile-explore')}
                className='flex items-center w-full px-3 py-2 text-gray-600 hover:text-blue-600'
              >
                Explore <ChevronDown className='ml-2 h-4 w-4' />
              </button>
              {activeDropdown === 'mobile-explore' && (
                <div className='pl-6 space-y-1'>
                  {explore.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-3 py-2 text-gray-600 hover:text-blue-600'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Programs */}
            <div className='space-y-1'>
              <button
                onClick={() => toggleDropdown('mobile-programs')}
                className='flex items-center w-full px-3 py-2 text-gray-600 hover:text-blue-600'
              >
                Programs <ChevronDown className='ml-2 h-4 w-4' />
              </button>
              {activeDropdown === 'mobile-programs' && (
                <div className='pl-6 space-y-1'>
                  {programs.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className='block px-3 py-2 text-gray-600 hover:text-blue-600'
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to='/about'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600'
            >
              About
            </Link>
            <Link
              to='/blog'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600'
            >
              Blog
            </Link>
            <Link
              to='/contact'
              className='block px-3 py-2 text-gray-600 hover:text-blue-600'
            >
              Contact
            </Link>
          </div>
          <div className='px-4 py-3 space-y-2'>
            <Link
              to='/login'
              className='w-full text-center block text-blue-600 hover:text-blue-700'
            >
              Log In
            </Link>
            <Link
              to='/signup'
              className='w-full block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
