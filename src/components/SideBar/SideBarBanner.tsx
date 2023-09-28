import { DotsIcon, Gradient, RightLongArrowIcon } from '@/icons';

const SideBarBanner = () => {
  return (
    <div className="w-[15.3125rem] h-[12.6875rem]">
      {/* <div className=" mix-blend-screen w-[170px] h-[170px] left-[147px] top-[78px] absolute bg-gradient-to-b from-cyan-200 to-cyan-200 rounded-full" /> */}
      <div className=" relative pt-[2.06rem] pl-[1.5rem] h-full bg-gradient-to-br from-sky-600 to-sky-400 rounded-[2rem]">
        <div className=" h-fit">
          <DotsIcon />
        </div>
        <div className="w-[12.1875rem] h-fit mt-[0.31rem]">
          <span className="text-white text-2xl font-bold font-cairo leading-[2.1rem]">
            Increase your{' '}
          </span>
          <span className="text-white text-[1.4375rem] font-bold font-cairo leading-[2.1rem]">
            work with kanban
          </span>
        </div>
        <div className=" h-fit mt-[0.94rem]">
          <RightLongArrowIcon />
        </div>
        <div className=" absolute bottom-0 right-0">
          <Gradient />
        </div>
      </div>
    </div>
  );
};

export default SideBarBanner;
