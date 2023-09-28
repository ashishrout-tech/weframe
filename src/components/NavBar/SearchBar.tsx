import { SearchIcon } from '@/icons';

const SearchBar = () => {
  return (
    <div className=" h-full w-full bg-[#211A75] rounded-[46px] flex gap-x-5 items-center pl-[2.37rem]">
      <SearchIcon />
      <input
        className=" h-[1.875rem] bg-transparent w-full font-cairo font-semibold text-base mr-10 focus:outline-none"
        placeholder="Search here"
      />
    </div>
  );
};

export default SearchBar;
