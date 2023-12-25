"use client";
import { useState } from "react";
import clsx from "clsx";
import { TargetBody } from "./TargetBody";
import { ObserverLocation } from "./ObserverLocation";
import { TimeSpecification } from "./TimeSpecification";
import { useSearchParams } from "next/navigation";
export default function Sidebar() {
  const [visible, setVisible] = useState(window.innerWidth > 1280);
  const params = useSearchParams();
  // const [horizons, setHorizons] = useState({
  //   targetBody: "10",
  //   latitud: "",
  //   longitud: "",
  //   startTime: "",
  //   stopTime: "",
  // });

  const handleSidebar = () => {
    setVisible((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    const STOP_TIME = params.get("STOP_TIME");
    const START_TIME = params.get("START_TIME");

    const startDate = new Date(STOP_TIME);
    const endDate = new Date(START_TIME);
    const maxInterval = 3 * 30 * 24 * 60 * 60 * 1000; // 3 meses en milisegundos

    if (endDate - startDate > maxInterval) {
      alert("El intervalo de fechas no puede ser mayor a 3 meses.");
      return;
    }
    const paramsObj = {};
    for (const [key, value] of params.entries()) {
      paramsObj[key] = value;
    }

    console.log(paramsObj);
    e.preventDefault();

    // Validar el intervalo de fechas (2 años)
    // const startDate = new Date(horizons.startTime);
    // const endDate = new Date(horizons.stopTime);
    // const maxInterval = 3 * 30 * 24 * 60 * 60 * 1000; // 3 meses en milisegundos

    // if (endDate - startDate > maxInterval) {
    //   alert("El intervalo de fechas no puede ser mayor a 3 meses.");
    //   return;
    // }
    // fetchEphemeris(horizons)
    setVisible();
  };

  return (
    <aside
      className={clsx(
        {
          "invisible hidden top-[9999px] h-0 xl:visible xl:block xl:top-0 ":
            visible !== true,
        },
        "bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden position absolute top-0  bottom-0 left-0 right-0 z-50 h-full xl:sticky max-h-screen "
      )}
    >
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="">
          <TargetBody />
          <ObserverLocation />
        </div>
        <TimeSpecification />
        <button
          type="submit"
          className="focus:outline-none text-white bg-[#0B602B] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5"
        >
          Generar Efemérides
        </button>
      </form>
    </aside>
  );
}
