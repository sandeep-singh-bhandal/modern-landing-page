interface Props {
    title: string;
  }

const NavLink = ({ title }:Props) => {
  return (
    <button className="text-[16px] font-bold leading-[24px] uppercase text-[#EAEDFF] transition-colors duration-500 cursor-pointer
     hover:text-[#2EF2FF] max-lg:my-4 max-lg:text-[32px] max-lg:font-semibold max:lg-leading-[40px]">
      {title}
    </button>
  );
};

export default NavLink;