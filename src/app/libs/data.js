import constellations from "@/app/libs/constellations.json";
import galaxies from "@/app/libs/galaxies.json";
import lunarEclipses from "@/app/libs/lunarEclipses.json";
import solarEclipses from "@/app/libs/solarEclipses.json";

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
