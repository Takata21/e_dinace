"use client";
import { TargetBody } from "./TargetBody";
import { ObserverLocation } from "./ObserverLocation";
import { TimeSpecification } from "./TimeSpecification";
import { useEphemerisStore } from "@/app/store/EphemerisStore";
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

  return (
    <div>
      <aside></aside>
      <aside className="top-0 bottom-0 left-0 right-0 z-50 hidden h-full max-h-screen overflow-hidden bg-white border-r border-gray-200 xl:block dark:bg-gray-800 dark:border-gray-700 position xl:sticky">
        <form className="px-5 py-3" onSubmit={handleSubmit}>
          <div className="">
            <TargetBody handleChange={onInputChange} horizons={horizons} />
            <ObserverLocation
              handleChange={onInputChange}
              horizons={horizons}
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
