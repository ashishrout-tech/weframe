import { AddFillColourButtonIcon } from '@/icons';
import { doneArr } from './contentArr';
import { Card } from '@/components';

export const Done = () => {
  return (
    <div id="todo-list" className=" flex flex-col w-[21.1875rem]">
      <div
        id="heading"
        className=" py-4 px-6 flex w-full justify-between items-center"
      >
        <p className="text-xl font-bold">Done (3)</p>
        <div className=" w-12 h-12 flex justify-between items-center p-2 rounded-xl bg-[#211A75] cursor-pointer">
          <AddFillColourButtonIcon />
        </div>
      </div>

      <div className=" w-full mt-4 flex flex-col gap-y-5">
        {doneArr.map((ele) => (
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
