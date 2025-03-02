import Data from "../utility/utilData";
import Button from "../components/Button";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="relative flex md:flex-wrap flex-nowrap border-2 border-[#334679] rounded-4xl md:overflow-hidden max-md:flex-col max-md:border-none max-md:rounded-4xl max-md:gap-3">
          {Data.features.map(({ id, icon, caption, title, text, button }) => (
            <div
              key={id}
              className="relative z-2 md:px-10 g7 px-5 md:pb-10 pb-5 shrink-0 basis-1/2 max-md:g7 max-md:border-2 max-md:border-[#334679] max-md:rounded-3xl max-md:shrink-0 max-md:basis-[320px]"
            >
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-16 bg-[#334679]" />

                  <img
                    src={icon}
                    className="size-28 object-contain"
                    alt={title}
                  />
                </div>
              </div>

              <p className="small-2 mb-5 uppercase text-p3 max-md:mb-6">
                {caption}
              </p>
              <h2 className="max-w-400 mb-7 text-[48px] font-semibold leading-[56px] tracking-[-0.02em] text-[#EAEDFF] max-md:mb-6 max-md:text-[32px] max-md:font-semibold max-md:leading-[40px]">
                {title}
              </h2>
              <p className="mb-11 text-[22px] leading-[36px]; max-md:mb-8 max-md:text-[16px] max-md:leading-[28px] max-md:tracking-[0.02em]">
                {text}
              </p>
              <Button icon={button.icon}>{button.title}</Button>
            </div>
          ))}

          <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-[#334679] rounded-4xl max-md:hidden">
            <div className="absolute bg-[#334679]/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

            {Data.details.map(({ id, icon, title }) => (
              <li key={id} className="relative pt-16 px-4 pb-14">
                <div className="absolute top-8 bottom-0 left-1/2 bg-[#334679]/20 w-[1px] h-full z-10" />

                <div className="flex items-center justify-center mx-auto mb-3 border-2 border-[#0C1838] rounded-full hover:border-[#1959AD] transition-all duration-500 size-20 cursor-pointer">
                  <img
                    src={icon}
                    alt={title}
                    className="size-17/20 object-contain z-20"
                  />
                </div>

                <h3 className="relative z-2 max-w-36 mx-auto my-0 text-[14px] font-semibold leading-[18px] tracking-[0.03em] text-center uppercase">
                  {title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Features;
