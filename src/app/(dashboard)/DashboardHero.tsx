import { BackButtonIcon } from '@/icons';
const DashboardHero = () => {
  return (
    <div className=" bg-[#15132B] p-8 flex justify-between">
      <div className=" flex gap-x-[1.12rem]">
        <div className=" h-fit">
          <BackButtonIcon />
        </div>
        <div className=" flex flex-col gap-y-[1.69rem]">
          <p className=" font-cairo text-2xl font-bold">
            School November Tasks
          </p>
          <p className=" font-cairo text-sm font-normal text-[#A5A5A5]">
            Created by Instructor Day on November 31, 2022
          </p>
          <div className=" h-[2.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
