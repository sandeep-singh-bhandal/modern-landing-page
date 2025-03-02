import { useState } from "react";
import utilData from "../utility/utilData";
import Link from '../components/Link'

const Header = () => {
  const [isOpen, setisOpen] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 py-10 z-50 w-full">
      <div className="w-full flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-[#0C1838] max-lg:opacity-${
            isOpen ? 100 : 0
          }`}
        >
          <div
            className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 
        max-lg:before:absolute max-lg:before:-right-64 max-lg:before:top-2/5 max-lg:before:h-[440px] max-lg:before:w-[252px] max-lg:before:bg-s4 max-lg:before:blur-[200px] max-lg:before:content-['']"
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto ">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-around max-lg:flex-col max-lg:items-start  ">
                  <Link title={utilData[0][0].title} />
                  <div className="size-1.5 rounded-full bg-[#3C52D9] max-lg:hidden"></div>
                  <Link title={utilData[0][1].title} />
                </li>

                <li className="relative flex flex-1 items-center justify-center">
                  <img
                    src="/images/xora.svg"
                    height={55}
                    width={150}
                    alt="logo"
                    className="max-lg:hidden"
                  />
                </li>

                <li className="relative flex flex-1 items-center justify-around max-lg:flex-col max-lg:items-start">
                  <Link title={utilData[0][2].title} />

                  <div className="size-1.5 rounded-full bg-[#3C52D9] max-lg:hidden"></div>
                  <Link title={utilData[0][3].title} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-[#1959AD] rounded-full justify-center items-center flex cursor-pointer"
          onClick={() => setisOpen(!isOpen)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="icon"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
