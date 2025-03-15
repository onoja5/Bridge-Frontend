import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ForStudents from './pages/ForStudents';
import ForEmployers from './pages/ForEmployers';
import ForEducators from './pages/ForEducators';
import ExploreOpportunities from './pages/ExploreOpportunities';
import CollegesUniversities from './pages/CollegesUniversities';
import BusinessNonprofits from './pages/BusinessNonprofits';
import StudentsLearners from './pages/StudentsLearners';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import WorkforceDevelopment from './pages/WorkforceDevelopment';
import WorkBasedLearning from './pages/WorkBasedLearning';
import ProjectInternships from './pages/ProjectInternships';
import News from './pages/News';
import Partners from './pages/Partners';
import Status from './pages/Status';
import Updates from './pages/Updates';
import Help from './pages/Help';
import ForgotPassword from './pages/ForgotPassword';
import Demo from './pages/Demo';
import PostProject from './pages/PostProject';
import Webinars from './pages/Webinars';

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
            <Route path="/careers" element={<Careers />} />
            <Route path="/workforce-development" element={<WorkforceDevelopment />} />
            <Route path="/work-based-learning" element={<WorkBasedLearning />} />
            <Route path="/project-internships" element={<ProjectInternships />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-employers" element={<ForEmployers />} />
            <Route path="/for-educators" element={<ForEducators />} />
            <Route path="/explore" element={<ExploreOpportunities />} />
            <Route path="/colleges" element={<CollegesUniversities />} />
            <Route path="/businesses" element={<BusinessNonprofits />} />
            <Route path="/learners" element={<StudentsLearners />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* New Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/status" element={<Status />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/help" element={<Help />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/post-project" element={<PostProject />} />
            <Route path="/webinars" element={<Webinars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;