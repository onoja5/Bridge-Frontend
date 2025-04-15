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

  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="text-base md:text-lg font-semibold mb-4">Proposed Projects</h3>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id}>
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base font-medium">{project.title}</span>
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
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProposedProjectsSection;