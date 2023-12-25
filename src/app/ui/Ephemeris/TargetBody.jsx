"use client";
import { getBodies } from "@/app/libs/data";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
export function TargetBody() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [bodyList, setBodyList] = useState([
    {
      jd_min: -1930633.5,
      spk_file: "/home/horizons/data/mb_spk_files/DE441.BSP",
      rot: true,
      kind: "MB",
      name: "Sun [Sol]",
      jd_max: 5373484,
      cd_max: "A.D. 9999-12-31 12:00",
      id: "10",
      cd_min: "B.C. 9999-03-20 00:00",
    },
    {
      cd_min: "B.C. 9999-03-20 00:00",
      id: "199",
      cd_max: "A.D. 9999-12-31 12:00",
      jd_max: 5373484,
      name: "Mercury",
      jd_min: -1930633.5,
      spk_file: "/home/horizons/data/mb_spk_files/DE441.BSP",
      rot: true,
      kind: "MB",
    },
    {
      cd_max: "A.D. 9999-12-31 12:00",
      cd_min: "B.C. 9999-03-20 00:00",
      id: "299",
      name: "Venus",
      jd_max: 5373484,
      jd_min: -1930633.5,
      spk_file: "/home/horizons/data/mb_spk_files/DE441.BSP",
      rot: true,
      kind: "MB",
    },
    {
      id: "399",
      cd_min: "B.C. 9999-03-20 00:00",
      cd_max: "A.D. 9999-12-31 12:00",
      jd_min: -1930633.5,
      spk_file: "/home/horizons/data/mb_spk_files/DE441.BSP",
      kind: "MB",
      rot: true,
      name: "Earth",
      jd_max: 5373484,
    },
    {
      cd_min: "1600-01-01 00:00",
      id: "499",
      cd_max: "2500-01-04 00:00",
      name: "Mars",
      jd_max: 2634169.5,
      spk_file: "/home/horizons/data/mb_spk_files/mar097.merged-2.bsp",
      jd_min: 2305447.5,
      rot: true,
      kind: "MB",
    },
    {
      cd_max: "2200-01-10 00:00",
      id: "599",
      cd_min: "1600-01-10 00:00",
      jd_min: 2305456.5,
      spk_file: "/home/horizons/data/mb_spk_files/jup365_merged.DE440.bsp",
      rot: true,
      kind: "MB",
      name: "Jupiter",
      jd_max: 2524602.5,
    },
    {
      name: "Saturn",
      jd_max: 2542860.5,
      jd_min: 2360232.5,
      spk_file: "/home/horizons/data/mb_spk_files/sat441l.bsp",
      rot: true,
      kind: "MB",
      cd_min: "1749-12-30 00:00",
      id: "699",
      cd_max: "2250-01-06 00:00",
    },
    {
      jd_min: 2305429.5,
      spk_file: "/home/horizons/data/mb_spk_files/ura116.DE440.bsp",
      rot: true,
      kind: "MB",
      jd_max: 2670685.5,
      name: "Uranus",
      cd_max: "2599-12-27 00:00",
      id: "799",
      cd_min: "1599-12-14 00:00",
    },
    {
      jd_min: 2305460.5,
      spk_file: "/home/horizons/data/mb_spk_files/nep102_merged.DE440.bsp",
      rot: true,
      kind: "MB",
      jd_max: 2597640.5,
      name: "Neptune",
      cd_max: "2399-12-31 00:00",
      id: "899",
      cd_min: "1600-01-14 00:00",
    },
  ]);
  const changeMajorBody = (e) => {
    const { filterList } = getBodies({ selectList: e });
    setBodyList(filterList);
  };

  const handleSelect = (COMMAND = "499") => {
    const params = new URLSearchParams(searchParams);
    if (COMMAND) {
      params.set("COMMAND", COMMAND);
    } else {
      params.delete("COMMAND");
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="">
      <label className="text-sm font-medium " htmlFor="majorBodies">
        Especificar el Cuerpo Celestial
      </label>

      <select
        id="majorBodies"
        className="block w-full p-2 mt-3 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        onChange={(e) => handleSelect(e.target.value)}
      >
        {bodyList?.map((body) => (
          <option key={body.id} value={body.id}>
            {body.name}
          </option>
        ))}
      </select>
    </div>
  );
}
