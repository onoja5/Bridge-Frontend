import { parseBlueprint } from '@/utils/parseBlueprint';

const CareerSection = ({ blueprint }: { blueprint: string }) => {
  const { roadmap } = parseBlueprint(blueprint);

  return (
    <section className='mt-8'>
      <div className='col-span-1'>
        <h3 className='text-lg font-bold mb-4'>Five Year Roadmap</h3>
        <ul className='space-y-4'>
          {roadmap.map((year, index) => (
            <li key={index} className='border-b pb-4'>
              <span>{year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CareerSection;
