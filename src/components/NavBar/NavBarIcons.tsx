import { BellIcon, CheckBoxIcon, FolderIcon, VideoIcon } from '@/icons';

type TIconArr = {
  id?: number;
  Icon: () => JSX.Element;
  bubbleNumber: null | number;
  bubbleColor: string;
};

const iconArr: TIconArr[] = [
  {
    id: 1,
    Icon: BellIcon,
    bubbleNumber: 12,
    bubbleColor: 'bg-[#5ECFFF]',
  },
  {
    id: 2,
    Icon: VideoIcon,
    bubbleNumber: 5,
    bubbleColor: 'bg-[#5ECFFF]',
  },
  {
    id: 3,
    Icon: CheckBoxIcon,
    bubbleNumber: 2,
    bubbleColor: 'bg-[#5ECFFF]',
  },
  {
    id: 4,
    Icon: FolderIcon,
    bubbleNumber: null,
    bubbleColor: 'bg-[#E328AF]',
  },
];

const NavBarIcons = () => {
  return (
    <div className="w-fit flex gap-x-[2.5rem]">
      {iconArr.map((ele) => (
        <SingleIcon
          key={ele.id}
          Icon={ele.Icon}
          bubbleNumber={ele.bubbleNumber}
          bubbleColor={ele.bubbleColor}
        />
      ))}
    </div>
  );
};

export default NavBarIcons;

const SingleIcon = ({ Icon, bubbleNumber, bubbleColor }: TIconArr) => {
  return (
    <div className=" w-[2.25rem] h-[2.75rem] relative">
      <div className="absolute bottom-0 left-0 w-[1.75rem] h-[1.75rem]">
        <Icon />
      </div>
      <div
        className={`${bubbleColor} text-gray-900 font-bold font-cairo w-[1.625rem] h-[1.625rem] absolute top-0 right-0 rounded-full flex justify-center items-center`}
      >
        {bubbleNumber ?? '!'}
      </div>
    </div>
  );
};
