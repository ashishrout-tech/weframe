'z-10 z-20 z-30 z-40 z-50';

const CircleComponent = ({
  total,
  commonClasses,
}: {
  total: number;
  commonClasses: string;
}) => {
  const arr = [];
  for (let i = 1; i <= Math.min(total, 5); i++) {
    arr.push({
      id: i,
      eleClass: `z-[${i * 10}]`,
    });
  }
  return (
    <div className=" flex -space-x-3">
      {arr.map((ele) => {
        if (ele.id < 5) {
          return (
            <ChildCirlce
              key={ele.id}
              eleClass={ele.eleClass}
              commonClasses={`${commonClasses} bg-[#C4C4C4]`}
            />
          );
        } else {
          return (
            <ChildCirlce
              key={ele.id}
              remain={total - 4}
              eleClass={ele.eleClass}
              commonClasses={`${commonClasses} bg-pink-500 text-white text-lg font-bold font-cairo`}
            />
          );
        }
      })}
    </div>
  );
};

const ChildCirlce = ({
  remain,
  eleClass,
  commonClasses,
}: {
  remain?: number;
  eleClass: string;
  commonClasses: string;
}) => {
  return (
    <div
      className={`${eleClass} ${commonClasses} w-10 h-10 rounded-full border-[1.7px] text-center py-0.5`}
    >
      {remain !== undefined ? `${remain}+` : ''}
    </div>
  );
};

export default CircleComponent;
