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

export const parseBlueprint = (blueprint: string): { tasks: Task[]; projects: Project[]; roadmap: string[]; vision: string; careerVision: string; fiveYearRoadmap: Record<string, string[]> } => {
  const tasks: Task[] = [];
  const projects: Project[] = [];
  const roadmap: string[] = [];
  let vision = '';
  let careerVision = '';
  let fiveYearRoadmap: Record<string, string[]> = {};

  // Split the blueprint into lines for easier parsing
  const lines = blueprint.split('\n');

  let taskId = 1;
  let projectId = 1;
  let inStructuredJson = false;
  let structuredJsonContent = '';

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

      // Add project title to roadmap
      roadmap.push(line.trim());
    }

    // Identify vision by a specific keyword (e.g., "Vision:")
    if (line.toLowerCase().includes('vision:')) {
      vision = line.replace('Vision:', '').trim();
    }

    // Handle Structured JSON Format
    if (line.toLowerCase().includes('structured json format')) {
      inStructuredJson = true;
    } else if (inStructuredJson && line.trim() === '```') {
      inStructuredJson = false;
      try {
        // Attempt to parse the JSON content
        const parsedJson = JSON.parse(structuredJsonContent);

        // Validate the parsed JSON structure
        if (typeof parsedJson === 'object' && parsedJson !== null) {
          careerVision = parsedJson.careerVision || '';
          fiveYearRoadmap = parsedJson.fiveYearRoadmap || {};
        } else {
          console.error('Parsed JSON is not an object:', parsedJson);
        }
      } catch (error) {
        console.error('Error parsing Structured JSON Format:', error);
        console.error('Structured JSON Content:', structuredJsonContent);
      }
      structuredJsonContent = '';
    } else if (inStructuredJson) {
      structuredJsonContent += line + '\n';
    }
  });

  return { tasks, projects, roadmap, vision, careerVision, fiveYearRoadmap };
};