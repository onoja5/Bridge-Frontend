import React from 'react';
import { Project } from '@/utils/parseBlueprint';

interface ProposedProjectsSectionProps {
  projects: Project[];
}

const ProposedProjectsSection: React.FC<ProposedProjectsSectionProps> = ({ projects }) => {
  const [expandedProject, setExpandedProject] = React.useState<number | null>(null);

  const toggleProject = (id: number) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  const formatText = (text: string) => {
    return text.replace(/[-#*]+/g, '').trim(); // Remove "-", "####", "**" and trim spaces
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-base md:text-lg font-semibold mb-4">Proposed Projects</h3>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base font-medium">{formatText(project.title)}</span>
              <button
                onClick={() => toggleProject(project.id)}
                className="text-blue-500 text-sm md:text-base"
              >
                {expandedProject === project.id ? 'Hide Topics' : 'View Topics'}
              </button>
            </div>
            {expandedProject === project.id && (
              <ul className="mt-2 pl-4 space-y-2">
                {project.subTopics.map((topic, index) => (
                  <li key={index} className="text-sm md:text-base text-gray-600">
                    {formatText(topic)}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => console.log(`Navigate to project ${project.id}`)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm md:text-base"
            >
              Start Project
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposedProjectsSection;