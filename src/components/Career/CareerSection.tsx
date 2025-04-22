import React, { useEffect, useState } from 'react';
import TasksSection from './TasksSection';
import ProposedProjectsSection from './ProposedProjectsSection';
import { Task, Project } from '@/utils/parseBlueprint';
import { fetchBlueprintTasksAndProjects } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext';

const CareerSection: React.FC = () => {
  const { userData } = useAuthContext();
  const userId = userData?._id;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        console.error('User ID is not available.');
        return;
      }

      try {
        const data = await fetchBlueprintTasksAndProjects(userId);
        if (data) {
          const { tasks, projects } = data;

          // Map tasks and projects to the required structure
          setTasks(
            tasks.map((task, index) => ({
              id: index + 1,
              title: task,
              status: 'in progress', // Default status
            }))
          );

          setProjects(
            projects.map((project, index) => ({
              id: index + 1,
              title: project,
              subTopics: [], // No subtopics provided in the response
            }))
          );
        }
      } catch (error) {
        console.error('Error fetching tasks and projects:', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Left Section: Tasks */}
      <div className="col-span-1">
        <TasksSection tasks={tasks} />
      </div>

      {/* Right Section: Proposed Projects */}
      <div className="col-span-2">
        <ProposedProjectsSection projects={projects} />
      </div>
    </div>
  );
};

export default CareerSection;