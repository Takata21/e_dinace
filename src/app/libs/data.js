import constellations from "@/app/libs/constellations.json";
import galaxies from "@/app/libs/galaxies.json";
import lunarEclipses from "@/app/libs/lunarEclipses.json";
import solarEclipses from "@/app/libs/solarEclipses.json";
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
