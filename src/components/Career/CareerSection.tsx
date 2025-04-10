import React, { useEffect, useState } from 'react';
import TasksSection from './TasksSection';
import ProposedProjectsSection from './ProposedProjectsSection';
import { parseBlueprint, Task, Project } from '@/utils/parseBlueprint'; // Import Task and Project interfaces
import { fetchUserBlueprint } from '@/utils/helper';
import { useAuthContext } from '@/contexts/AuthContext'; // Import AuthContext to get user data

const CareerSection: React.FC = () => {
  const { userData } = useAuthContext(); // Get user data from AuthContext
  const userId = userData?._id; // Extract userId from userData

  const [tasks, setTasks] = useState<Task[]>([]); // Explicitly type as Task[]
  const [projects, setProjects] = useState<Project[]>([]); // Explicitly type as Project[]

  useEffect(() => {
    const fetchBlueprintData = async () => {
      if (!userId) {
        console.error('User ID is not available.');
        return; // Exit if userId is null
      }

      try {
        // Fetch the blueprint data from the backend
        const blueprint = await fetchUserBlueprint(userId); // Pass userId as an argument
        console.log('Fetched Blueprint:', blueprint);

        // Parse the blueprint to extract tasks and projects
        const { tasks, projects } = parseBlueprint(blueprint || ''); // Fallback to an empty string
        setTasks(tasks);
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching blueprint data:', error);
      }
    };

    fetchBlueprintData();
  }, [userId]); // Add userId as a dependency

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