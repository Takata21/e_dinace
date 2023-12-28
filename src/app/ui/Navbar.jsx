"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import MobileNav from "./MobileNav";
export default function Navbar() {
  return (
    <header className="t-navbar w-full xl:p-3 border-gray-200 sticky left-0 right-0 top-0 z-[1] md:z-[999] bg-inherit  bg-white">
      <div className="items-center hidden xl:flex h-[60px]">
        <div className="flex items-center justify-between flex-1 w-full">
          <Link href="/" className="flex items-center">
            <img
              src="images/dinace_logo.png"
              className="h-16 my-1 mr-1"
              alt="dinace Logo"
            />
            <div>
              <span className="self-center text-[8px] font-medium whitespace-nowrap text-black dark:text-white">
                Universidad Tecnológica de Panamá
              </span>
              <h2 className="text-[9px] font-semibold text-[#29166F] dark:text-white">
                Dirección Nacional de Ciencias <br className="hidden" />
                Espaciales
              </h2>
            </div>
          </Link>
          <div className="flex items-center mr-4">
            <ThemeToggle />
          </div>
        </div>
        <nav className="menu flex-[2] justify-end  dark:text-white ">
          <ul className="justify-end hidden h-full gap-5 p-4 text-center xl:flex">
            <li>
              <a
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                href="https://dinace.utp.ac.pa/"
                target="_blank"
                rel="noreferrer"
              >
                DINACE
              </a>
            </li>

            <li>
              <Link
                href="/efemerides"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Efemérides
              </Link>
            </li>
            <li>
              <Link
                href="/constelaciones"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Constelaciones
              </Link>
            </li>
            <li>
              <Link
                href="/galaxias"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Galaxias
              </Link>
            </li>
            <li>
              <Link
                href="/fases-lunares"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Fases de la Luna
              </Link>
            </li>
            <li>
              <Link
                href="/eclipses-lunares"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Eclipses Lunares
              </Link>
            </li>
            <li>
              <Link
                href="/eclipses-solares"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Eclipses Solares
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-[60px] flex justify-between items-center p-3 md:hidden">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img
              src="images/dinace_logo.png"
              className="h-12 my-1 mr-1"
              alt="dinace Logo"
            />
          </Link>
          <div>
            <span className="self-center text-[8px] font-medium whitespace-nowrap text-black dark:text-white">
              Universidad Tecnológica de Panamá
            </span>
            <h2 className="text-[9px] font-semibold text-[#29166F] dark:text-white">
              Dirección Nacional de Ciencias <br className="hidden" />
              Espaciales
            </h2>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
