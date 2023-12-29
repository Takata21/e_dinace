"use client";
import { TargetBody } from "./TargetBody";
import { ObserverLocation } from "./ObserverLocation";
import { TimeSpecification } from "./TimeSpecification";
import { useEphemerisStore } from "@/app/store/EphemerisStore";
import { RiAiGenerate } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useState } from "react";

export default function Sidebar() {
  const { fetchEphemeris } = useEphemerisStore();
  const [horizons, setHorizons] = useState({
    targetBody: "499",
    latitude: "",
    longitude: "",
    startTime: "",
    stopTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar el intervalo de fechas (2 años)
    const startDate = new Date(horizons.startTime);
    const endDate = new Date(horizons.stopTime);
    const maxInterval = 3 * 30 * 24 * 60 * 60 * 1000; // 3 meses en milisegundos

    if (endDate - startDate > maxInterval) {
      alert("El intervalo de fechas no puede ser mayor a 3 meses.");
      return;
    }
    fetchEphemeris(horizons);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setHorizons((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleMap = (latlng) => {
    setHorizons((prev) => ({
      ...prev,
      latitude: latlng.lat.toFixed(4),
      longitude: latlng.lng.toFixed(4),
    }));
  };
  return (
    <div>
      <aside className="md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center gap-2 px-2 py-2 mt-3 ml-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg 1xl:hidden focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <RiAiGenerate /> Crear Efemérides
          </SheetTrigger>
          <SheetContent side="left">
            <form className="px-5 py-3" onSubmit={handleSubmit}>
              <div className="">
                <TargetBody handleChange={onInputChange} horizons={horizons} />
                <ObserverLocation
                  handleChange={onInputChange}
                  horizons={horizons}
                />
              </div>
              <TimeSpecification
                handleChange={onInputChange}
                horizons={horizons}
              />
              <SheetClose asChild>
                <button
                  type="submit"
                  className="focus:outline-none text-white bg-[#0B602B] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5"
                >
                  Generar Efemérides
                </button>
              </SheetClose>
            </form>
          </SheetContent>
        </Sheet>
      </aside>
      <aside className="top-0 bottom-0 left-0 right-0 z-50 hidden h-full max-h-screen overflow-hidden bg-white border-r border-gray-200 xl:block dark:bg-gray-800 dark:border-gray-700 position xl:sticky md:block">
        <form className="px-5 py-3" onSubmit={handleSubmit}>
          <div className="">
            <TargetBody handleChange={onInputChange} horizons={horizons} />
            <ObserverLocation
              handleChange={onInputChange}
              horizons={horizons}
              handleMap={handleMap}
            />
          </div>
          <TimeSpecification handleChange={onInputChange} horizons={horizons} />
          <button
            type="submit"
            className="focus:outline-none text-white bg-[#0B602B] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5"
          >
            Generar Efemérides
          </button>
        </form>
      </aside>
    </div>
  );
}
