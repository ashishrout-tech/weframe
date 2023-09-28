import { DropDownIon } from '@/icons';

const NavbarProfile = () => {
  return (
    <div className=" w-56 h-[3.5625rem] flex gap-x-6">
      <div className=" w-fit">
        <div className="w-[3.5625rem] h-full bg-stone-300 rounded-[14px]" />
      </div>
      <div className=" w-full h-full flex justify-between items-center">
        <div className=" flex flex-col justify-end gap-y-1.5">
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