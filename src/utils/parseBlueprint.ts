export interface Task {
  id: number;
  title: string;
  status: 'in progress' | 'done';
}

export interface Project {
  id: number;
  title: string;
  subTopics: string[];
}

export const parseBlueprint = (blueprint: string): { tasks: Task[]; projects: Project[] } => {
  const tasks: Task[] = [];
  const projects: Project[] = [];

  // Split the blueprint into lines for easier parsing
  const lines = blueprint.split('\n');

  let taskId = 1;
  let projectId = 1;

  lines.forEach((line, index) => {
    // Identify tasks by keywords like "Task:" or "Complete"
    if (line.toLowerCase().includes('task:') || line.toLowerCase().includes('complete')) {
      tasks.push({
        id: taskId++,
        title: line.trim(),
        status: 'in progress', // Default status
      });
    }

    // Identify projects by keywords like "Project:" or "Build"
    if (line.toLowerCase().includes('project:') || line.toLowerCase().includes('build')) {
      const subTopics: string[] = [];

      // Extract subtopics for the project (e.g., indented lines starting with "- ")
      for (let i = index + 1; i < lines.length; i++) {
        const subLine = lines[i].trim();
        if (subLine.startsWith('- ')) {
          subTopics.push(subLine.replace('- ', '').trim());
        } else {
          break; // Stop if the next line is not a subtopic
        }
      }

      projects.push({
        id: projectId++,
        title: line.trim(),
        subTopics,
      });
    }
  });

  return { tasks, projects };
};