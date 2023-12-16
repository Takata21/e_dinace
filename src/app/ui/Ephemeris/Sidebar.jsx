"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
export default function Sidebar() {
  const [visible, setVisible] = useState(window.innerWidth > 1280);
  const { bodyList, changeMajorBody, majorBodies } = {};
  const [horizons, setHorizons] = useState({
    targetBody: "10",
    latitud: "",
    longitud: "",
    startTime: "",
    stopTime: "",
  });
  const handleSidebar = () => {
    setVisible((prev) => !prev);
  };

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
    // fetchEphemeris(horizons)
    setVisible();
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setHorizons((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <aside
      className={clsx(
        {
          "invisible hidden top-[9999px] h-0 xl:visible xl:block xl:top-0 ":
            visible !== true,
        },
        "bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden position absolute top-0  bottom-0 left-0 right-0 z-50 h-full xl:sticky max-h-screen"
      )}
    >
      <form className="px-5 py-3" onSubmit={handleSubmit}>
        <div className="">
          <div className="flex items-center justify-between mb-3 1xl:hidden">
            <label className="text-sm font-medium" htmlFor="majorBodies">
              Especificar el Cuerpo Celestial
            </label>

            <button
              type="button"
              className="flex items-center justify-center w-5 h-5 mb-2 text-sm font-medium text-white bg-red-700 rounded-lg focus:outline-none hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => handleSidebar()}
            >
              <IoMdClose size={25} />
            </button>
          </div>
          <select
            id="majorBodies"
            className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={majorBodies}
            onChange={(e) => changeMajorBody(e.target.value)}
            name="major-bodies"
            required
          >
            <option defaultValue value="The Sun and Planets">
              El Sol y los Planetas
            </option>
            <option value="Jovian Satellites">Satélites Jovianos</option>
            <option value="Saturnian Satellites">Satélites de Saturno</option>
            <option value="Uranian Satellites">Satélites de Urano</option>
            <option value="Neptunian Satellites">Satélites de Neptuno</option>
            <option value="Other Planetary Satellites">
              Otros Satélites Planetarios
            </option>
            <option value="Spacecraft">Naves Espaciales</option>
            <option value="Special Objects">Objetos Especiales</option>
            <option value="Dynamic Points">Puntos Dinámicos</option>
          </select>

          <select
            id="bodyList"
            className="block w-full p-2 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="targetBody"
            onChange={onInputChange}
          >
            {bodyList?.list?.map((body) => (
              <option key={body.id} value={body.id}>
                {body.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <h3 className="mb-3 text-sm font-medium">
            Especificar la Ubicación del Observador
          </h3>
          <div className="mb-4">
            <label
              htmlFor="latitud"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Latitud:
            </label>
            <input
              type="number"
              id="latitud"
              name="latitud"
              step="0.00001"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="40.7128"
              required
              pattern="-?\d{1,3}(?:\.\d{0,5})?"
              onChange={onInputChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="longitud"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Longitud:
            </label>
            <input
              type="number"
              id="longitud"
              name="longitud"
              step="0.00001"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="-74.0060"
              required
              pattern="-?\d{1,3}(?:\.\d{0,5})?"
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="">
          <h3 className="mb-3 text-sm font-medium">Especificación de Tiempo</h3>
          <div className="mb-3">
            <label
              htmlFor="start-time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fecha de inicio:
            </label>
            <input
              required
              type="date"
              name="startTime"
              id="start-time"
              className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded-lg "
              onChange={onInputChange}
              min="1000-01-01"
            />
          </div>
          <div>
            <label
              htmlFor="stop-time"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fecha final:
            </label>
            <input
              required
              type="date"
              name="stopTime"
              id="stop-time"
              className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded-lg "
              onChange={onInputChange}
              max="9999-12-31"
            />
          </div>
        </div>
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
