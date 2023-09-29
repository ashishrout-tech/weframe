const ProgressBar = ({
  className,
  completed,
  height,
}: {
  className: string;
  completed: number;
  height: string;
}) => {
  return (
    <div
      style={{ height: `${height}` }}
      className=" w-[17.25rem] flex -space-x-1"
    >
      <div
        style={{ width: `${completed}%` }}
        className={`${className} rounded-md z-10`}
      ></div>
      <div
        style={{ width: `${100 - completed}%` }}
        className={`bg-[#1E1C3A] rounded-r-md`}
      ></div>
    </div>
  );
};

export default ProgressBar;
