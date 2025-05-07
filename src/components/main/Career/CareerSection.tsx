import TasksSection from './TasksSection';

const CareerSection = ({ taskData }: { taskData: string[] }) => {
  return (
    <section className='  mt-8'>
      {/* Left Section: Tasks */}
      <div className='col-span-1'>
        <TasksSection tasks={taskData} />
      </div>
    </section>
  );
};

export default CareerSection;
