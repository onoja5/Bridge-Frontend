import React, { useState } from 'react';
import CompleteTaskModal from './CompleteTaskModal';
import { useAuthContext } from '@/contexts/AuthContext';
import { updateTask } from '@/services/career.api';
import { handleError, handleSuccess } from '@/utils/helper';
interface TasksSectionProps {
  tasks: string[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {
  const { userData } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  const [completedTask, setCompletedTask] = useState(false);
  const [taskName, setTaskName] = useState('');

  const handleOpenCompleteTask = (task: string) => {
    setCompletedTask(true);
    setTaskName(task);
  };

  const handleCompleteTask = async () => {
    setIsLoading(true);
    try {
      const rsp = await updateTask(userData?._id, { tasks: [taskName] });

      if (!rsp?.success) {
        handleError(rsp?.message || 'An error occurred');
        setCompletedTask(false);
        setIsLoading(false);
        return;
      } else {
        handleSuccess(rsp?.message || 'Task completed successfully');
        setCompletedTask(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='bg-white p-4 rounded-md'>
        <h3 className='text-md font-semibold mb-4'>Tasks</h3>
        <hr />
        {tasks?.length > 0 ? (
          <ul className='space-y-4 divide-y divide-gray-200'>
            {tasks?.map((task, idx) => (
              <li
                key={idx}
                className='flex flex-wrap justify-between items-center gap-5 py-2'
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
          onClose={() => setCompletedTask(false)}
          onConfirm={handleCompleteTask}
          taskName={taskName}
          loading={isLoading}
        />
      )}
    </>
  );
};

export default TasksSection;
