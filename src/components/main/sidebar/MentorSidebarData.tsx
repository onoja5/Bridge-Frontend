// src/components/main/sidebar/MentorSidebarData.ts
import { FaHome, FaUsers, FaBook, FaBriefcase } from 'react-icons/fa';

export const MentorSidebarData = [
  { name: 'Dashboard', path: '/mentor/dashboard', icon: <FaHome /> },
  { name: 'Mentees', path: '/mentor/mentees', icon: <FaUsers /> },
  { name: 'Resources', path: '/mentor/resources', icon: <FaBook /> },
  { name: 'Jobs', path: '/mentor/jobs', icon: <FaBriefcase /> },
];