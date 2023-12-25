"use client";
import { Tooltip } from "react-tooltip";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
export function ObserverLocation() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleLat = (e) => {
    const latParamName = "LATITUDE";
    const latParamValue = e.target.value || "8.488212";
    // Obtener los parámetros actuales
    const params = new URLSearchParams(searchParams);

    // Establecer el nuevo valor de latitud
    if (latParamValue) {
      params.set(latParamName, latParamValue);
    } else {
      params.delete(latParamName);
    }

    // Reemplazar la URL con los nuevos parámetros
    replace(`${pathname}?${params}`);
  };

  const handleLong = (e) => {
    const longParamName = "LONGITUDE";
    const longParamValue = e.target.value || -80.328743;

    // Obtener los parámetros actuales
    const params = new URLSearchParams(searchParams);

    // Establecer el nuevo valor de longitud
    if (longParamValue) {
      params.set(longParamName, longParamValue);
    }

    // Reemplazar la URL con los nuevos parámetros
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="mb-3 text-sm font-medium">
          Especificar la Ubicación del Observador.
        </h3>

        <a id="my-anchor-element">
          <button type="button" onClick={() => console.log("hola")}>
            <FaMapMarkerAlt
              size={25}
              color="#2c84cb"
              className="hover:#007bff50"
            />
          </button>
        </a>
        <Tooltip
          anchorSelect="#my-anchor-element"
          content="Obtener Ubicación"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="latitud"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Latitud:
          <input
            type="number"
            id="latitude"
            name="latitude"
            step="0.00001"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="40.7128"
            required
            pattern="/^-?([0-8]?[0-9]|90)(\.\d{1,6})?$/"
            onChange={(e) => handleLat(e)}
            defaultValue={searchParams.get("LATITUDE")?.toString()}
          />
        </label>
      </div>

      <div className="mb-4">
        <label
          htmlFor="longitud"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Longitud:
          <input
            type="number"
            id="longitude"
            name="longitude"
            step="0.00001"
            className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="-74.0060"
            required
            pattern="/^-?((1[0-7]|[0-9]?[0-9])|180)(\.\d{1,6})?$/"
            onChange={(e) => handleLong(e)}
            defaultValue={searchParams.get("LONGITUDE")?.toString()}
          />
        </label>
      </div>
    </>
  );
}
