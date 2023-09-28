import { AmericaFlagIcon, DropDownIon } from '@/icons';

const LanguageGroup = () => {
  return (
    <div className=" w-[11.0625rem] h-[4.25rem] px-[1.25rem] flex gap-x-[0.87rem] rounded-[46px] bg-[#211A75] items-center">
      <div>
        <AmericaFlagIcon />
      </div>
      <p className="text-white text-base font-bold font-cairo">ENGLISH</p>
      <div>
        <DropDownIon />
      </div>
    </div>
  );
};

export default LanguageGroup;
