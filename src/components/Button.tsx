import clsx from "clsx";
import Marker from "./Marker";

const Button = ({
  icon,
  children,
  href,
  containerClass,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span
        className="relative flex items-center min-h-[55px] px-4 g4 rounded-2xl inset-0 duration-200 
      transition-transform overflow-hidden hover:translate-x-1.5 shadow-500"
      >
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 uppercase text-[#2EF2FF] text-[16px] font-bold leading-[24px];">
          {children}
        </span>
      </span>
      <span className="before:g8 before:absolute before:left-2/5 before:top-0 before:z-4 before:h-0.5 before:w-3/5 before:opacity-0 before:transition-all before:duration-500 before:content-[''] group-hover:before:left-4 group-hover:before:opacity-40 after:g8 after:absolute after:bottom-0 after:left-4 after:z-4 after:h-0.5 after:w-7/20 after:opacity-0 after:transition-all after:duration-500 after:content-[''] group-hover:after:left-3/5 group-hover:after:opacity-40" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5  rounded-2xl shadow-500 group cursor-pointer",
        containerClass
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5  rounded-2xl shadow-500 group cursor-pointer"
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
