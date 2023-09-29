'use client';

import { HamburgerIcon } from '@/icons';
import LanguageGroup from './LanguageGroup';
import NavBarIcons from './NavBarIcons';
import NavbarProfile from './NavbarProfile';
import SearchBar from './SearchBar';

const Navbar = ({ toggleSidebar }: any) => {
  return (
    <div className=" h-[7.5rem] bg-[#15132B] flex justify-around items-center">
      <span onClick={toggleSidebar} className=" 2xl:hidden pl-2 cursor-pointer">
        <HamburgerIcon />
      </span>
      <div className="pl-4 lg:p-0 w-[15rem] sm:w-[18rem] lg:w-[30.6875rem] h-[4.25rem]">
        <SearchBar />
      </div>
      <p className="hidden lg:inline-block text-[#6418C3] text-base font-bold font-cairo underline hover:cursor-pointer">
        OTHER MENUS
      </p>
      <div className="hidden md:inline-block w-fit">
        <NavBarIcons />
      </div>
      <div className="hidden lg:inline-block w-fit">
        <LanguageGroup />
      </div>
      <div className="w-px h-14 bg-slate-800 rounded-lg hidden sm:inline-block" />
      <div className="w-fit">
        <NavbarProfile />
      </div>
    </div>
  );
};

export default Navbar;
