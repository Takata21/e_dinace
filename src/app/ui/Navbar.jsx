"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleMenu = () => {
    setMenuVisible((prev) => !prev);
  };
  return (
    <header className="t-navbar w-full  xl:p-3  border-gray-200 fixed left-0 right-0 top-0  z-[999] bg-inherit  bg-white">
      <div className="items-center hidden xl:flex">
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
      <nav className="mobileMenu xl:hidden w-full  border-gray-200 bg-inherit relative top-0 dark:bg-[#0f172a] bg-white px-3 flex items-center justify-between py-3">
        <div className="flex items-center">
          <Link
            href="https://dinace.utp.ac.pa/"
            className="flex items-center elative z-[999]"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/dinace_logo.png"
              className="h-16"
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

        <div className="menu flex-[2] justify-end dark:bg-gray-900 dark:text-white">
          <div className="flex items-center justify-end gap-5 mobileTopRight relative z-[999]">
            <ThemeToggle />
            <button className="" onClick={() => handleMenu()}>
              {menuVisible ? <MdClose size={40} /> : <MdMenu size={40} />}
            </button>
          </div>
          <ul
            className={`absolute  top-0 h-screen pt-[88px] ${
              menuVisible ? "left-0" : "left-[999px]"
            } right-0 bg-white gap-5 p-4  dark:bg-[#1f273a]`}
          >
            <li>
              <a
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
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
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Efemérides
              </Link>
            </li>
            <li>
              <Link
                href="/constelaciones"
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Constelaciones
              </Link>
            </li>
            <li>
              <Link
                href="/galaxias"
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Galaxias
              </Link>
            </li>
            <li>
              <Link
                href="/fases-lunares"
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Fases de la Luna
              </Link>
            </li>
            <li>
              <Link
                href="/eclipses-lunares"
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Eclipses Lunares
              </Link>
            </li>
            <li>
              <Link
                href="/eclipses-solares"
                className="flex py-[10px] px-[8px] text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
                onClick={() => handleMenu()}
              >
                Eclipses Solares
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
