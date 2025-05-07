import React, { useState } from 'react';
import CompleteTaskModal from './CompleteTaskModal';

interface TasksSectionProps {
  tasks: string[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {
  const [completedTask, setCompletedTask] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handleOpenCompleteTask = (task: string) => {
    setCompletedTask(true);
    setTaskName(task);
  };

  const handleCompleteTask = (task: string) => {
    setCompletedTask(true);
    setTaskName(task);
  };

  return (
    <>
      <div className='bg-white p-4 rounded-md'>
        <h3 className='text-md font-semibold mb-4'>Tasks</h3>
        <hr />
        {tasks.length > 0 ? (
          <ul className='space-y-4 divide-y divide-gray-200'>
            {tasks.map((task, idx) => (
              <li
                key={idx}
                className='flex justify-between items-center gap-5 py-2'
              >
                <article className='flex justify-between items-center gap-4'>
                  <span className='text-sm font-normal rounded-full bg-gray-200 px-2 py-1'>
                    {idx + 1}.
                  </span>
                  <span className='text-sm font-normal flex-1'>{task}</span>
                </article>

                <button
                  onClick={() => handleOpenCompleteTask(task)}
                  className='text-sm font-normal rounded-full bg-primary text-white px-4 py-2'
                >
                  Mark as Completed
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-gray-500'>No tasks available.</p>
        )}
      </div>

      {completedTask && (
        <CompleteTaskModal
          isOpen={completedTask}
          onClose={() => setCompletedTask(false)} // Close modal
          onConfirm={() => handleCompleteTask(taskName)} // Confirm delete action
          taskName={taskName} // Pass folder name
        />
      )}
    </>
  );
};

export default TasksSection;
