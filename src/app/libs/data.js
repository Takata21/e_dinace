import constellations from "@/app/libs/constellations.json";
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
