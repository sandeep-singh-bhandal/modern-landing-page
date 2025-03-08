import { useState, useEffect } from "react";
import { headerData } from "../utility/utilData";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const Link = ({ title, id }: { title: string; id: string }) => {
    return (
      <a
        className="text-[16px] font-bold leading-[24px] uppercase text-[#EAEDFF] transition-colors duration-500 cursor-pointer
     hover:text-[#2EF2FF] max-lg:my-4 max-lg:text-[32px] max-lg:font-semibold max:lg-leading-[40px]"
        href={id}
        onClick={() => setisOpen(false)}
      >
        {title}
      </a>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 32);
      return () => {
        window.removeEventListener;
      };
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sectionList = document.querySelectorAll("section");
      sectionList.forEach((section) => {
        const id = section.getAttribute("id");
        const menuItem = document.querySelector(
          `header div div div nav ul li a[href="#${id}"]`
        );
        if (menuItem) {
          const scrollY = window.scrollY;
          const sectionTop = section.offsetTop - 150;

          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + section.offsetHeight
          ) {
            menuItem.classList.add("activeLinkClass");
          } else {
            menuItem.classList.remove("activeLinkClass");
          }
        }
      });
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 py-10 z-50 transition-all duration-500 w-full max-lg:py-4 ${
        hasScrolled ? "bg-black-100 backdrop-blur-[8px] py-4" : ""
      }`}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a
          className="lg:hidden flex-1 cursor-pointer z-2"
          href="#hero"
          onClick={() => setisOpen(false)}
        >
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto ">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Link title={headerData[0].name} id={headerData[0].href} />
                  <div className="dot"></div>
                  <Link title={headerData[1].name} id={headerData[1].href} />
                </li>

                <li className="nav-logo cursor-pointer">
                  <a href={headerData[4].href}>
                    <img
                      src="/images/xora.svg"
                      height={55}
                      width={150}
                      alt="logo"
                      className="max-lg:hidden"
                    />
                  </a>
                </li>

                <li className="nav-li">
                  <Link title={headerData[2].name} id={headerData[2].href} />

                  <div className="dot"></div>
                  <Link title={headerData[3].name} id={headerData[3].href} />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center cursor-pointer"
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
