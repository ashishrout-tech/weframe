import { HamburgerIcon } from '@/icons';
import SidebarMenu from './SidebarMenu';
import SideBarBanner from './SideBarBanner';

const SideBar = () => {
  return (
    <div className="w-[21.5625rem] h-[77.5625rem] bg-[#15132B] shadow">
      <div className=" w-full h-[7.5rem] flex justify-center items-center">
        <p className="w-[11.625rem] h-6 text-white text-2xl font-normal font-awesome flex items-center">
          weframtech
        </p>
        <HamburgerIcon />
      </div>
      <div className=" w-full h-[42.0625rem]">
        <SidebarMenu />
      </div>
      <div className=" w-full mt-[7.31rem] flex justify-center items-center">
        <SideBarBanner />
      </div>
    </div>
  );
};

export default SideBar;
