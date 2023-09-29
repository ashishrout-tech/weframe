import { DropDownIon } from '@/icons';

const NavbarProfile = () => {
  return (
    <div className="w-40 sm:w-52 lg:w-[13rem] h-[3.5625rem] gap-x-4 flex lg:gap-x-6">
      <div className=" ml-10 sm:m-0">
        <div className="w-[3.5625rem] h-full bg-stone-300 rounded-[14px]" />
      </div>
      <div className=" w-full h-full flex justify-between items-center gap-x-[1.75rem]">
        <div className="hidden sm:flex flex-col justify-end gap-y-1.5 w-[6.1875rem]">
          <div className="text-white text-base font-bold font-cairo ">
            Instructor Day
          </div>
          <div className="text-indigo-400 text-sm font-normal font-cairo">
            Super Admin
          </div>
        </div>
        <div>
          <DropDownIon />
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
