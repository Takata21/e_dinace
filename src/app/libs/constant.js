export const menuLinks = [
  {
    label: "Efemérides",
    route: "/efemerides",
  },
  {
    label: "Constelaciones",
    route: "/constelaciones",
  },
  {
    label: "Galaxias",
    route: "/galaxias",
  },
  {
    label: "Fases de la Luna",
    route: "/fases-lunares",
  },
  {
    label: "Planetas",
    route: "/planetas",
  },
  {
    label: "Eclipses Lunares",
    route: "/eclipses-lunares",
  },
  {
    label: "Eclipses Solares",
    route: "/eclipses-solares",
  },
];

export const PLANETS = [
  {
    id: "a3a061c1-29a8-4442-b3a2-218f717ffc45",
    name: "Mercurio",
    original: "Mercury",
  },
  {
    id: "006abf5b-83d4-4af1-8ad4-651714d3e4bf",
    name: "Venus",
    original: "Venus",
  },
  {
    id: "4f102fd1-d697-4c80-8914-0104fcfa2086",
    name: "Tierra",
    original: "Earth",
  },
  {
    id: "b6523636-844f-46f2-9b74-85738731edc6",
    name: "Marte",
    original: "Mars",
  },
  {
    id: "c54c873b-45e9-4440-9205-0b3409176a6f",
    name: "Jupiter",
    original: "Jupiter",
  },
  {
    id: "fae6d233-899d-49da-9cbb-f0480956bbc4",
    name: "Saturno",
    original: "Saturn",
  },
  {
    id: "09ee0cef-eea6-41a7-bb49-628ff78b0cf6",
    name: "Neptuno",
    original: "Neptune",
  },
  {
    id: "0fa79dd7-93c0-477f-89a2-757ae667e238",
    name: "Urano",
    original: "Uranus",
  },
];

export const EARTH_DIAMETER = 12742;
// Tipos generales de eclipses
export const SOLAR_ECLIPSE = "Solar Eclipses";
export const LUNAR_ECLIPSE = "Lunar Eclipses";

// Solar eclipse types
export const SOLAR_ECLIPSE_ALL = "all";
export const SOLAR_ECLIPSE_PARTIAL = "P";
export const SOLAR_ECLIPSE_ANNULAR = "A";
export const SOLAR_ECLIPSE_TOTAL = "T";
export const SOLAR_ECLIPSE_HYBRID = "H";
// export const SOLAR_ECLIPSE_TOTAL = 'Total Solar Eclipse'
// export const SOLAR_ECLIPSE_PARTIAL = 'Partial Solar Eclipse'
// export const SOLAR_ECLIPSE_ANNULAR = 'Annular Solar Eclipse'

// Lunar eclipse types
export const LUNAR_ECLIPSE_ALL = "all";
export const LUNAR_ECLIPSE_PENUMBRAL = "N";
export const LUNAR_ECLIPSE_PARCIAL = "P";
export const LUNAR_ECLIPSE_TOTAL = "T";
// export const LUNAR_ECLIPSE_TOTAL = 'Total Lunar Eclipse'
// export const LUNAR_ECLIPSE_PARTIAL = 'Partial Lunar Eclipse'
// export const LUNAR_ECLIPSE_PENUMBRAL = 'Penumbral Lunar Eclipse'

export const LUNAR_ECLIPSE_TYPES = {
  Nb: "Eclipse Penumbral Total",
  N: "Eclipse Penumbral",
  P: "Eclipse Parcial",
  T: "Eclipse Total",
  "T+": "Eclipse Total +",
  "T-": "Eclipse Total -",
  Nx: "Eclipse Penumbral Extra",
};

export const SOLAR_ECLIPSE_TYPES = {
  Pb: "Eclipse  Parcial con Besseliano",
  P: "Eclipse  Parcial",
  Ts: "Eclipse  Total con Sombra de la Tierra",
  Am: "Eclipse  Anular con Magnitud Máxima",
  A: "Eclipse  Anular",
  Pe: "Eclipse  Parcial Extra",
  T: "Eclipse Total",
  H: "Eclipse Híbrido",
};
export const Headers = [
  { original: "Fecha y Hora", abbreviation: "Fecha" },
  { original: "Ascensión Recta", abbreviation: "AR" },
  { original: "Declinación", abbreviation: "Dec" },
  { original: "Magnitud Aparente del Sol", abbreviation: "Mag Sol" },
  { original: "Brillo Superficial del Sol", abbreviation: "Brillo Sol" },
  { original: "Distancia Aparente al Objetivo", abbreviation: "Distancia" },
  {
    original: "Tasa de Cambio de Distancia al Objetivo",
    abbreviation: "Tasa Cambio",
  },
  { original: "Ángulo de Elongación Solar", abbreviation: "Ángulo Elongación" },
  {
    original: "Ángulo Solar-Objetivo-Observador",
    abbreviation: "Ángulo S-O-O",
  },
  { original: "Constelación", abbreviation: "Const" },
];

export const EphemerisLabels = [
  "Nombre del cuerpo objetivo",
  "Nombre del cuerpo central",
  "Nombre del sitio central",
  // 'Fecha de inicio',
  // 'Fecha de finalización',
  "Intervalo",
  "Polo/ecuador objetivo",
  "Radios objetivo",
  "Geodésico central",
  "Cilíndrico central",
  "Polo/ecuador central",
  "Radios centrales",
  "Primario objetivo",
  "Interferencia visible",
  "Doblez de luz relativo",
  "GM de doblez de luz relativo",
  "Refracción atmosférica",
  "Formato de RA",
  "Formato de tiempo",
  "Modo de calendario",
  "Archivo EOP",
  "Cobertura EOP",
  "Conversión de unidades",
  "Cortes de tabla 1",
  "Cortes de tabla 2",
  "Cortes de tabla 3",
  "Formato de tabla",
];

export const ConstellationFilterOptions = [
  { value: "all", text: "Nombre" },
  { value: "surface", text: "Superficie" },
  { value: "ngc", text: "Objetos NGC" },
  { value: "caldwell", text: "Objetos Caldwell" },
];

export const solarEclipseTypesOptions = [
  { value: "all", text: "Todos los Eclipses" },
  { value: "P", text: "Eclipse Parcial" },
  { value: "A", text: "Eclipse Anular" },
  { value: "T", text: "Eclipse Total" },
  { value: "H", text: "Eclipse Híbrido" },
  { value: "Pb", text: "Eclipse Parcial con Besseliano" },
  { value: "Ts", text: "Eclipse Total con Sombra de la Tierra" },
  { value: "Am", text: "Eclipse Anular con Magnitud Máxima" },
  { value: "Pe", text: "Eclipse Parcial Extra" },
];

export const lunarEclipseTypesOptions = [
  { value: "all", text: "Todos los Eclipses" },
  { value: "N", text: "Eclipse Penumbral" },
  { value: "P", text: "Eclipse Parcial" },
  { value: "T", text: "Eclipse Total" },
  { value: "Nb", text: "Eclipse Penumbral Total" },
  { value: "T+", text: "Eclipse Total +" },
  { value: "T-", text: "Eclipse Total -" },
  { value: "Nx", text: "Eclipse Penumbral Extra" },
];
