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
      <span className="relative flex items-center min-h-[55px] px-4 g4 rounded-2xl before:g7 before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] group-hover:before:opacity-100 overflow-hidden ">
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
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative p-0.5  rounded-2xl shadow-500 group",
        containerClass
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative p-0.5  rounded-2xl shadow-500 group")}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
