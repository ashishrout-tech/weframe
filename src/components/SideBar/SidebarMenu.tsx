import { ElementArr, TElementArr } from './SideBarMenuElements';

const SidebarMenu = () => {
  return (
    <div className=" h-full w-full">
      <p className="text-stone-300 text-base font-bold font-openSans tracking-wide ml-[3.13rem] mb-[1.56rem]">
        MAIN MENU
      </p>
      <div className=" scrollbar-thumb-rounded-lg scrollbar-h-4 scrollbar-thumb-violet-700 scrollbar-thin h-[39.12rem] grid gap-y-[0.87rem] overflow-auto">
        {ElementArr.map((ele) => (
          <SmallComponent
            key={ele.text}
            Icon={ele.Icon}
            text={ele.text}
            textClasses={ele.textClasses}
            RightChildren={ele.RightChildren}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;

const SmallComponent = ({
  Icon,
  text,
  textClasses,
  RightChildren,
}: TElementArr) => {
  return (
    <div className=" w-full h-[3.125rem] pl-[3.125rem] items-center flex justify-between">
      <div className="flex gap-x-[1.62rem] items-center">
        <Icon />
        <p className={`${textClasses} font-cairo`}>{text}</p>
      </div>
      {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
      {RightChildren ? <RightChildren /> : ''}
    </div>
  );
};
