import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ForStudents from './pages/ForStudents';
import ForEmployers from './pages/ForEmployers';
import ForEducators from './pages/ForEducators';
import ExploreOpportunities from './pages/ExploreOpportunities';
import CollegesUniversities from './pages/CollegesUniversities';
import BusinessNonprofits from './pages/BusinessNonprofits';
import StudentsLearners from './pages/StudentsLearners';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// New page components for program routes
const WorkforceDevelopment = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Workforce Development Programs</h1>
      <p className="text-gray-600">Coming soon! Our workforce development programs are being developed.</p>
    </div>
  </div>
);

const WorkBasedLearning = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Work-Based Learning Programs</h1>
      <p className="text-gray-600">Coming soon! Our work-based learning programs are being developed.</p>
    </div>
  </div>
);

const ProjectInternships = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Project-Based Internships</h1>
      <p className="text-gray-600">Coming soon! Our project-based internships are being developed.</p>
    </div>
  </div>
);

// New page components for missing routes
const Careers = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const News = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const Partners = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Partners</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const Status = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">System Status</h1>
      <p className="text-gray-600">All systems operational</p>
    </div>
  </div>
);

const Updates = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Product Updates</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const Help = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-600">Coming soon! We're working on this page.</p>
    </div>
  </div>
);

const ForgotPassword = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <p className="text-gray-600">Coming soon! Password reset functionality is under development.</p>
    </div>
  </div>
);

const Demo = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Schedule a Demo</h1>
      <p className="text-gray-600">Coming soon! Demo scheduling will be available shortly.</p>
    </div>
  </div>
);

const PostProject = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Post a Project</h1>
      <p className="text-gray-600">Coming soon! Project posting functionality is under development.</p>
    </div>
  </div>
);

function App() {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(element => observer.observe(element));

    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col page-transition">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-employers" element={<ForEmployers />} />
            <Route path="/for-educators" element={<ForEducators />} />
            <Route path="/explore" element={<ExploreOpportunities />} />
            <Route path="/colleges" element={<CollegesUniversities />} />
            <Route path="/businesses" element={<BusinessNonprofits />} />
            <Route path="/learners" element={<StudentsLearners />} />
            <Route path="/workforce-development" element={<WorkforceDevelopment />} />
            <Route path="/work-based-learning" element={<WorkBasedLearning />} />
            <Route path="/project-internships" element={<ProjectInternships />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* New Routes */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/status" element={<Status />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/help" element={<Help />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/post-project" element={<PostProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;