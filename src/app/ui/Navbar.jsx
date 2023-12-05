"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
export default function Navbar() {
  return (
    <header className="w-full h-20 p-3  border-gray-200 ">
      <div className="flex items-center">
        <div className="flex items-center justify-between w-full flex-1">
          <a
            href="https://dinace.utp.ac.pa/"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
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
          </a>
          <div className="flex items-center mr-4">
            <ThemeToggle />
          </div>
        </div>
        <nav className="menu flex-[2] justify-end dark:bg-gray-900 dark:text-white">
          <ul className="flex  h-full p-4 text-center gap-5 justify-end ">
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
                href="/ephemeris"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Efemérides
              </Link>
            </li>
            <li>
              <Link
                href="/constellations"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Constelaciones
              </Link>
            </li>
            <li>
              <Link
                href="/galaxies"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Galaxias
              </Link>
            </li>
            <li>
              <Link
                href="/moon-phases"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Fases de la Luna
              </Link>
            </li>
            <li>
              <Link
                href="/lunar-eclipses"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Eclipses Lunares
              </Link>
            </li>
            <li>
              <Link
                href="/solar-eclipses"
                className="block text-[#0c163b] hover:text-[#0000006b] font-bold text-sm links-transitions dark:hover:text-[#fafafa93] dark:text-white"
              >
                Eclipses Solares
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
