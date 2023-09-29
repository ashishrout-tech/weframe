import { AddFillColourButtonIcon } from '@/icons';

const Revised = () => {
  return (
    <div id="todo-list" className=" flex flex-col w-[21.1875rem]">
      <div
        id="heading"
        className=" py-4 px-6 flex w-full justify-between items-center"
      >
        <p className="text-xl font-bold">Revised (0)</p>
        <div className=" w-12 h-12 flex justify-between items-center p-2 rounded-xl bg-[#211A75] cursor-pointer">
          <AddFillColourButtonIcon />
        </div>
      </div>

      <div className=" w-full mt-7 bg-[#211A75] p-5 flex flex-col rounded-2xl">
        <div className=" h-[4.1875rem] border-2 border-dashed border-[#7879F1] bg-[#15132B] text-[#7879F1] text-base font-semibold flex justify-center items-center rounded-2xl">
          Move card here
        </div>
      </div>
    </div>
  );
};

export default Revised;
