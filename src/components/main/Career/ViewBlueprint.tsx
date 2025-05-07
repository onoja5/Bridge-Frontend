import React from 'react';

interface BlueprintDetailViewProps {
  blueprint: any; // You can define a more specific type if desired
  onBack: () => void;
}

// Helper function to recursively render JSON as HTML
const renderJson = (data: any) => {
  if (
    typeof data === 'string' ||
    typeof data === 'number' ||
    typeof data === 'boolean'
  ) {
    return <span>{data.toString()}</span>;
  }
  if (Array.isArray(data)) {
    return (
      <ul className='ml-4 list-disc'>
        {data.map((item, idx) => (
          <li key={idx}>{renderJson(item)}</li>
        ))}
      </ul>
    );
  }
  if (typeof data === 'object' && data !== null) {
    return (
      <div className='ml-2'>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className='mb-2'>
            <strong className='capitalize'>
              {key.replace(/([A-Z])/g, ' $1')}:
            </strong>
            <div className='ml-4'>{renderJson(value)}</div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const ViewBlueprint: React.FC<BlueprintDetailViewProps> = ({
  blueprint,
  onBack,
}) => {
  return (
    <div className='detail-view-container p-6'>
      <button
        onClick={onBack}
        className='mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md'
      >
        Back
      </button>
      <div className='text-sm bg-white p-6 rounded-md text-gray-600 whitespace-pre-wrap'>
        <p>
          📘 <strong>Section 1: Motivational Career Blueprint</strong>
          <br /> <br />
          In the next 5 years, imagine yourself strategically navigating your
          career, evolving into someone who not only embodies mastery in your
          chosen field but achieves fulfillment and impact as well. Without
          specific inputs to tailor this plan, we&apos;ll construct a
          universally inspiring and adaptable blueprint applicable to any field
          or aspiration. This plan focuses on leveraging foundational strengths,
          honing critical skills, and strategically expanding your network to
          create opportunities for innovation and growth.
          <br /> <br />
          An Inspiring Picture of Your Career in 5 Years Imagine yourself at the
          5-year mark as someone deeply respected in your industry, known for
          your expertise and consistent value delivery. You&apos;re working on
          projects that align with your passions, standing at the intersection
          of creativity, problem-solving, and leadership. You are a thought
          leader in your space, mentoring others and driving innovation while
          feeling fulfilled by the positive impact of your contributions. Your
          income reflects your deep expertise and leadership, providing
          financial security and autonomy to pursue personal interests.{' '}
        </p>
        <br /> <br />
        {renderJson(blueprint)}
      </div>
    </div>
  );
};

export default ViewBlueprint;
