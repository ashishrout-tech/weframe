import { Card } from '@/components';
import { AddFillColourButtonIcon } from '@/icons';
import { inProgressArr } from './contentArr';

const InProgress = () => {
  return (
    <div id="todo-list" className=" flex flex-col w-[21.1875rem]">
      <div
        id="heading"
        className=" py-4 px-6 flex w-full justify-between items-center"
      >
        <p className="text-xl font-bold">In Progress (2)</p>
        <div className=" w-12 h-12 flex justify-between items-center p-2 rounded-xl bg-[#211A75] cursor-pointer">
          <AddFillColourButtonIcon />
        </div>
      </div>

      <div className=" w-full mt-4 flex flex-col gap-y-5">
        {inProgressArr.map((ele) => (
          <Card
            key={ele.id}
            status={ele.status}
            colourClasses={ele.colourClasses}
            progress={ele.progress}
            totalCircle={ele.totalCircle}
            dueDays={ele.dueDays}
          >
            {ele.innerText}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InProgress;
