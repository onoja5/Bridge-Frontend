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
import WorkforceDevelopment from './pages/WorkforceDevelopment';
import WorkBasedLearning from './pages/WorkBasedLearning';
import ProjectInternships from './pages/ProjectInternships';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;