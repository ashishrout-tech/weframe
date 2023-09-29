import { Button, CircleComponent, ProgressBar } from '@/components';
import {
  AddFriendIcon,
  BackButtonIcon,
  CommentIcon,
  Logo1Icon,
  VertIcon,
} from '@/icons';

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
          <div className=" h-[2.5rem] flex gap-x-5">
            <CircleComponent total={9} commonClasses={`border-[#15132B]`} />
            <Button className=" bg-[#6418C3]">
              <AddFriendIcon />
              <p>Invite People</p>
            </Button>
            <Button className=" border border-[#7879F1]">Private</Button>
            <Button className=" bg-[#7879F1]">Edit</Button>
            <Button className=" border border-[#7879F1] !font-normal">
              <CommentIcon />
              <p>45 Comments</p>
            </Button>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-y-[3.25rem]">
        <div className=" flex justify-end items-center gap-x-6">
          <div className=" flex flex-col gap-y-1 ">
            <p className="text-lg font-bold font-cairo">
              Centered Martial Arts
            </p>
            <p className="text-neutral-400 text-sm font-normal font-openSans flex justify-end">
              Sunnyvale, Ca
            </p>
          </div>
          <div className=" w-[4.25rem] h-[4.25rem] bg-white rounded-2xl flex justify-center items-center">
            <Logo1Icon />
          </div>
          <VertIcon />
        </div>
        <div className=" flex justify-end gap-x-7 items-center">
          <p className=" font-semibold font-openSans">Total Progress 60%</p>
          <ProgressBar
            className={`bg-[#6418C3]`}
            completed={60}
            height={'0.625rem'}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
