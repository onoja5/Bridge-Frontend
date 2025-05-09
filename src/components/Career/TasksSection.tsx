import React, { useState, useEffect } from 'react';
import { Task } from '@/utils/parseBlueprint';

interface TasksSectionProps {
  tasks: Task[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Update local state when the tasks prop changes
  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const handleStatusChange = (id: number, newStatus: 'in progress' | 'done') => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <h3 className="text-md font-semibold mb-4">Tasks</h3>
      {taskList.length > 0 ? (
        <ul className="space-y-4">
          {taskList.map((task) => (
            <li key={task.id} className="flex justify-between items-center gap-5">
              <span className="text-sm font-normal">{task.title}</span>
              <select
                value={task.status}
                onChange={(e) =>
                  handleStatusChange(task.id, e.target.value as 'in progress' | 'done')
                }
                className={`appearance-none px-3 py-1 text-center rounded-full outline-none w-auto text-white text-sm ${
                  task.status === 'in progress' ? 'bg-blue-500' : 'bg-green-500'
                }`}
                style={{
                  backgroundImage: 'none', // Removes the dropdown arrow
                }}
              >
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No tasks available.</p>
      )}
    </div>
  );
};

export default TasksSection;