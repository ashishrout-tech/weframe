import { ClockIcon, HorizontalDotsIcon } from '@/icons';
import { CircleComponent, ProgressBar } from '.';

const Card = ({
  status,
  colourClasses,
  children,
  progress,
  totalCircle,
  dueDays,
}: {
  status: string;
  colourClasses: string;
  children: React.ReactNode;
  progress: number;
  totalCircle: number;
  dueDays: number;
}) => {
  return (
    <div className=" w-full bg-[#211A75] px-8 p-6 flex flex-col gap-y-2 rounded-2xl">
      <div id="status" className=" flex justify-between items-center">
        <div className=" flex gap-x-[0.69rem] items-center">
          <div className={`${colourClasses} w-2.5 h-2.5 rounded-full`} />
          <p
            className={`${colourClasses} text-sm font-semibold font-openSans w-fit !bg-transparent`}
          >
            {status}
          </p>
        </div>
        <HorizontalDotsIcon />
      </div>

      <div
        id="body"
        className="text-white text-lg font-semibold font-cairo leading-7 mb-3"
      >
        {children}
      </div>
      <ProgressBar
        completed={progress}
        className={colourClasses}
        height={'0.45rem'}
      />
      <div className=" flex justify-between mt-3.5">
        <CircleComponent
          total={totalCircle}
          commonClasses={`border-[#211A75]`}
        />
        <div className=" flex items-center justify-end gap-x-2">
          <ClockIcon />
          <p className="text-neutral-400 text-sm font-semibold font-openSans text-right">
            Due in {dueDays} days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
