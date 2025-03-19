const Skeleton = ({ height }: { height?: string }) => {
  return (
    <div
      className={`${
        height ? height : ''
      } h-16 w-full animate-pulse rounded bg-gray-300`}
    />
  );
};

export default Skeleton;
