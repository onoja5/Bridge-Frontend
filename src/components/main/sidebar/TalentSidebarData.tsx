// src/components/main/sidebar/TalentSidebarData.ts
import { FaHome, FaRoad, FaBook, FaUsers, FaLightbulb, FaBriefcase } from 'react-icons/fa';

export const TalentSidebarData = [
  { name: 'Dashboard', path: '/talent/dashboard', icon: <FaHome /> },
  { name: 'Career Roadmap', path: '/talent/career', icon: <FaRoad /> },
  { name: 'Projects', path: '/talent/projects', icon: <FaBook /> },
  { name: 'Mentorships', path: '/talent/mentorship', icon: <FaUsers /> },
  { name: 'Recommendations', path: '/talent/recommendations', icon: <FaLightbulb /> },
  { name: 'Jobs', path: '/talent/jobs', icon: <FaBriefcase /> },
];