import constellations from "@/app/libs/constellations.json";
import galaxies from "@/app/libs/galaxies.json";
import lunarEclipses from "@/app/libs/lunarEclipses.json";
import solarEclipses from "@/app/libs/solarEclipses.json";
import planets from "@/app/libs/planets.json";
import bodyList from "@/app/libs/bodyList.json";
import { getUTCHour } from "./utils";

export function fetchConstellations(query, page = 1) {
  const ITEM_PER_PAGE = 9;

  const filteredConstellations = constellations.filter((constellation) =>
    constellation.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredConstellations.length / ITEM_PER_PAGE);

  const data = filteredConstellations.slice(
    ITEM_PER_PAGE * (page - 1),
    ITEM_PER_PAGE * page
  );
  return { data, totalPages };
}
export function fetchConstellation({ name }) {
  // Busca la constelación por nombre (ignorando mayúsculas/minúsculas)
  const foundConstellation = constellations.find(
    (constellation) => constellation.name.toLowerCase() === name.toLowerCase()
  );

  // Verifica si se encontró la constelación
  if (foundConstellation) {
    const {
      id,
      title,
      neighboringConstellations,
      description,
      mythology,
      mainStars,
      surface,
      rightAscension,
      declination,
      visibility,
      numberOfStars,
      messierObjects,
      NGCObjects,
      caldwellObjects,
      ...rest
    } = foundConstellation;

    // Estructura la información de la constelación
    const constellationInfo = [
      { label: "Superficie", desc: surface },
      { label: "Ascensión Recta", desc: rightAscension },
      { label: "Declinación", desc: declination },
      { label: "Visibilidad", desc: visibility },
      { label: "Número de Estrellas", desc: numberOfStars },
      { label: "Objetos Messier", desc: messierObjects },
      { label: "Objetos NGC", desc: NGCObjects },
      { label: "Objetos Caldwell", desc: caldwellObjects },
    ];

    // Estructura la información limpia de la constelación
    const cleanConstellationInfo = {
      id,
      name: foundConstellation.name,
      title,
      neighboringConstellations,
      description,
      mythology,
      mainStars,
      constellationInfo,
    };

    // Devuelve la información limpia de la constelación
    return { constellation: cleanConstellationInfo };
  }

  // Devuelve null si no se encontró la constelación
  return { constellation: null };
}

export function fetchGalaxy({ id }) {
  // console.log(id.trim());
  // Busca la galaxia por nombre (ignorando mayúsculas/minúsculas)
  const foundGalaxy = galaxies.find((item) => {
    return (
      item.name.translation.toLowerCase().replace(/\s/g, "") ===
      id.toLowerCase().replace(/\s/g, "")
    );
  });
  // Verifica si se encontró la galaxia
  if (foundGalaxy) {
    // Devuelve la información de la galaxia encontrada
    return { galaxy: foundGalaxy };
  }

  // Devuelve null si no se encontró la galaxia
  return { galaxy: null };
}

export function fetchGalaxies(query, page = 1) {
  const ITEM_PER_PAGE = 9;

  const filteredGalaxies = galaxies.filter((galaxie) =>
    galaxie.name.translation.toLowerCase().startsWith(query.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGalaxies.length / ITEM_PER_PAGE);

  const data = filteredGalaxies.slice(
    ITEM_PER_PAGE * (page - 1),
    ITEM_PER_PAGE * page
  );
  return { data, totalPages };
}

export function fetchLunarEclipses(query, page = 1) {
  const ITEM_PER_PAGE = 9;
  if (query === "all") {
    const totalPages = Math.ceil(lunarEclipses.length / ITEM_PER_PAGE);

    const eclipses = lunarEclipses.slice(
      ITEM_PER_PAGE * (page - 1),
      ITEM_PER_PAGE * page
    );
    const totalEclipses = lunarEclipses.length;

    return { eclipses, totalPages, totalEclipses };
  }

  const filteredEclipse = lunarEclipses.filter(
    (eclipse) => eclipse.ecl_type.toLowerCase() === query.toLowerCase()
  );

  const totalPages = Math.ceil(filteredEclipse.length / ITEM_PER_PAGE);

  const totalEclipses = filteredEclipse.length;

  const eclipses = filteredEclipse.slice(
    ITEM_PER_PAGE * (page - 1),
    ITEM_PER_PAGE * page
  );
  return { eclipses, totalPages, totalEclipses };
}

export function fetchSolarEclipses(query, page = 1) {
  const ITEM_PER_PAGE = 9;
  if (query === "all") {
    const totalPages = Math.ceil(solarEclipses.length / ITEM_PER_PAGE);

    const eclipses = solarEclipses.slice(
      ITEM_PER_PAGE * (page - 1),
      ITEM_PER_PAGE * page
    );
    const totalEclipses = solarEclipses.length;

    return { eclipses, totalPages, totalEclipses };
  }

  const filteredEclipse = solarEclipses.filter(
    (eclipse) => eclipse.ecl_type.toLowerCase() === query.toLowerCase()
  );

  const totalPages = Math.ceil(filteredEclipse.length / ITEM_PER_PAGE);

  const totalEclipses = filteredEclipse.length;

  const eclipses = filteredEclipse.slice(
    ITEM_PER_PAGE * (page - 1),
    ITEM_PER_PAGE * page
  );
  return { eclipses, totalPages, totalEclipses };
}

export function getLunarEclipseInformation({ id }) {
  const eclipseInformation = lunarEclipses.find(
    (eclipse) => eclipse.seq_num === id.slice(0, -3)
  );
  return eclipseInformation;
}

export function getSolarEclipseInformation({ id }) {
  const eclipseInformation = solarEclipses.find(
    (eclipse) => eclipse.seq_num === id
  );
  return eclipseInformation;
}

export async function fetchMoonPhase({
  dateTimeValue = new Date().toISOString().slice(0, 16),
}) {
  const date = dateTimeValue.slice(0, 11);
  const hour = getUTCHour(dateTimeValue);
  const API_URL = "https://svs.gsfc.nasa.gov/api/dialamoon";
  try {
    const response = await fetch(`${API_URL}/${date}${hour}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    return await response.json();
  } catch (error) {
    console.log("Error", error);
    throw new Error("Failed to fetch data.");
  }
}

export function getBodies({ selectList }) {
  const draft = bodyList.filter((item) => {
    return item.label.toLowerCase() === selectList.toLowerCase();
  });
  const filterList = draft[0].list;
  return { filterList };
}

export async function fetchEphemris(horizon) {
  const { COMMAND, LATITUDE, LONGITUDE, START_TIME, STOP_TIME } = horizon;
  const URL = "https://ssd.jpl.nasa.gov/api/horizons.api";
  return { test: "true" };
  // try {
  //   const response = fetch(
  //     `${URL}?format=json&COMMAND='${COMMAND}'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='coord@399'&SITE_COORD='${LONGITUDE},${LATITUDE},0'&START_TIME='${START_TIME}'&STOP_TIME='${STOP_TIME}'&CSV_FORMAT='YES'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'&COORD_TYPE=GEODETIC`
  //   );

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch data.");
  //   }
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.log("Error", error);
  //   throw new Error("Failed to fetch data.");
  // }
}

export function fetchPlanet({ name }) {
  const foundPlanet = planets.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );
  if (foundPlanet) {
    return { planet: foundPlanet };
  }
  return { planet: null };
}
