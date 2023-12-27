"use client";
import { Tooltip } from "react-tooltip";
import { FaMapMarkerAlt } from "react-icons/fa";
export function ObserverLocation({ handleChange }) {
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>
    </>
  );
}
