import LanguageGroup from './LanguageGroup';
import NavBarIcons from './NavBarIcons';
import NavbarProfile from './NavbarProfile';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <div className=" h-[7.5rem] bg-[#15132B] flex justify-around items-center">
      <div className=" w-[30.6875rem] h-[4.25rem]">
        <SearchBar />
      </div>
      <p className="text-[#6418C3] text-base font-bold font-cairo underline hover:cursor-pointer">
        OTHER MENUS
      </p>
      <div className=" w-fit">
        <NavBarIcons />
      </div>
      <div className=" w-fit">
        <LanguageGroup />
      </div>
      <div className="w-fit">
        <NavbarProfile />
      </div>
    </div>
  );
};

export default Navbar;
