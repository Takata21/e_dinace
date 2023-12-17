"use client";
import { useState, useEffect } from "react";

import styles from "./Slider.module.css";
import { VideoBackground } from "../VideoBackground";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { Info } from "../Info";
export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    const nextSlide = () => {
      setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
    };

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);
  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1)
  // }

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div
          className={`${styles.slide}  relative flex flex-col items-end justify-end h-full pl-5 text-left pb-9 xl:justify-center xl:items-start xl:gap-5`}
        >
          <VideoBackground source="/videos/milky_way_glowing_at_night.webm" />
          <h3 className="text-[#375ba7] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px] xl:text-3xl z-10">
            Efemérides
          </h3>
          <Link
            href="/efemerides"
            className="z-10 w-full text-2xl font-semibold text-white text-gradient xl:text-5xl xl:w-[620px]"
          >
            Explorando el Calendario Cósmico, Tras los Pasos de los Astros
            <FaArrowRightLong className="arrow xl:my-5" color="#375ba7" />
          </Link>
          <div className="absolute bottom-2 right-1"></div>
        </div>
        <div
          className={`${styles.slide}  relative flex flex-col items-end justify-end h-full pl-5 text-left pb-9 xl:justify-center xl:items-start xl:gap-5`}
        >
          <VideoBackground source="/videos/constellations.webm" />
          <h3 className="text-[#375ba7] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px] xl:text-3xl z-10">
            Constelaciones
          </h3>
          <Link
            href="/constelaciones"
            className="z-10 w-full text-2xl font-semibold text-white text-gradient xl:text-5xl xl:w-[620px]"
          >
            Las Constelaciones nos Guían{" "}
            <FaArrowRightLong className="arrow xl:my-5" color="#375ba7" />
          </Link>
          <div className="absolute bottom-2 right-1"></div>
        </div>
        <div
          className={`${styles.slide}  relative flex flex-col items-end justify-end h-full pl-5 text-left pb-9 xl:justify-center xl:items-start xl:gap-5`}
        >
          <VideoBackground source="/videos/galaxy.webm" />
          <h3 className="text-[#375ba7] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px] xl:text-3xl z-10">
            Galaxias
          </h3>
          <Link
            href="/galaxias"
            className="z-10 w-full text-2xl font-semibold text-white text-gradient xl:text-5xl xl:w-[620px]"
          >
            NAVEGA ENTRE LAS GALAXIAS
            <FaArrowRightLong className="arrow xl:my-5" color="#375ba7" />
          </Link>
          <div className="absolute bottom-2 right-3">
            <Info info="NASA" title="Image credit" />
          </div>
        </div>
        <div
          className={`${styles.slide}  relative flex flex-col items-end justify-end h-full pl-5 text-left pb-9 xl:justify-center xl:items-start xl:gap-5`}
        >
          <VideoBackground source="/videos/eclipse.webm" />
          <h3 className="text-[#375ba7] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px] xl:text-3xl z-10">
            Eclipses
          </h3>
          <Link
            href="/eclipses-lunares"
            className="z-10 w-full text-2xl font-semibold text-white text-gradient xl:text-5xl xl:w-[620px]"
          >
            ENTRE LUZ Y SOMBRA{" "}
            <FaArrowRightLong className="arrow xl:my-5" color="#375ba7" />
          </Link>
          <div className="absolute bottom-2 right-3">
            <Info info="NASA" title="Image credit" />
          </div>
        </div>
        <div
          className={`${styles.slide}  relative flex flex-col items-end justify-end h-full pl-5 text-left pb-9 xl:justify-center xl:items-start xl:gap-5`}
        >
          <VideoBackground source="/videos/MoonPhase.webm" />
          <h3 className="text-[#375ba7] font-Space text-xl font-bold block uppercase text-left w-full tracking-[3px] xl:text-3xl z-10">
            Fases de la Luna
          </h3>
          <Link
            href="/fases-lunares"
            className="z-10 w-full text-2xl font-semibold text-white text-gradient xl:text-5xl xl:w-[620px]"
          >
            EXPLORA LAS FASES OCULTAS DE LA LUNA
            <FaArrowRightLong className="arrow xl:my-5" color="#375ba7" />
          </Link>
          <div className="absolute bottom-2 right-3">
            <Info info="NASA" title="Image credit" />
          </div>
        </div>
      </div>
      {/* <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <MdWest />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <MdEast />
        </div>
      </div> */}
    </div>
  );
};
