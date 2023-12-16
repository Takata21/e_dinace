export function formatCoordinates(j2000Ra, j2000Dec) {
  // Conversión de Ascensión Recta
  const raHours = Math.floor(j2000Ra);
  const raMinutes = Math.floor((j2000Ra - raHours) * 60);
  const raSeconds = (j2000Ra - raHours - raMinutes / 60) * 3600;
  const formattedRa = `${raHours}h ${raMinutes}m ${raSeconds.toFixed(2)}s`;

  // Conversión de Declinación
  const decDeg = Math.floor(j2000Dec);
  const decMinutes = Math.floor((j2000Dec - decDeg) * 60);
  const decSeconds = (j2000Dec - decDeg - decMinutes / 60) * 3600;
  const formattedDec = `${decDeg > 0 ? "+" : "-"}${Math.abs(
    decDeg
  )}° ${decMinutes}' ${decSeconds.toFixed(2)}"`;

  return `${formattedRa}, ${formattedDec}`;
}

export function formatGeographicCoordinates(longitude, latitude) {
  const lonDeg = Math.floor(Math.abs(longitude));
  const lonMinutes = Math.floor((Math.abs(longitude) - lonDeg) * 60);
  const lonSeconds = (
    (Math.abs(longitude) - lonDeg - lonMinutes / 60) *
    3600
  ).toFixed(1);
  const lonDirection = longitude >= 0 ? "E" : "W";
  const formattedLon = `${lonDirection} ${lonDeg}° ${lonMinutes}' ${lonSeconds}"`;

  const latDeg = Math.floor(Math.abs(latitude));
  const latMinutes = Math.floor((Math.abs(latitude) - latDeg) * 60);
  const latSeconds = (
    (Math.abs(latitude) - latDeg - latMinutes / 60) *
    3600
  ).toFixed(1);
  const latDirection = latitude >= 0 ? "N" : "S";
  const formattedLat = `${latDirection} ${latDeg}° ${latMinutes}' ${latSeconds}"`;

  return `${formattedLat}, ${formattedLon} `;
}

export function convertAge(age) {
  const days = Math.floor(age);
  const decimalPart = age - days;

  const hours = Math.floor(decimalPart * 24);
  const minutes = Math.floor((decimalPart * 24 - hours) * 60);

  return {
    days,
    hours,
    minutes,
  };
}

// export function getLunarPhaseDescription(phasePercentage) {
//   const fixPercentage = phasePercentage / 100;
//   const phaseMap = [
//     { range: [0.0, 0.01], description: { es: "Luna Nueva", en: "New Moon" } },
//     {
//       range: [0.01, 0.24],
//       description: { es: "Luna Creciente", en: "Waxing Crescent" },
//     },
//     {
//       range: [0.24, 0.49],
//       description: { es: "Cuarto Creciente", en: "First Quarter" },
//     },
//     {
//       range: [0.49, 0.74],
//       description: { es: "Luna Gibosa Creciente", en: "Waxing Gibbous" },
//     },
//     { range: [0.74, 1.0], description: { es: "Luna Llena", en: "Full Moon" } },
//     {
//       range: [0.99, 0.74],
//       description: { es: "Luna Gibosa Menguante", en: "Waning Gibbous" },
//     },
//     {
//       range: [0.74, 0.49],
//       description: { es: "Cuarto Menguante", en: "Last Quarter" },
//     },
//     {
//       range: [0.49, 0.24],
//       description: { es: "luna menguante", en: "Waning Crescent" },
//     },
//   ];

//   const matchedPhase = phaseMap.find(
//     (phase) =>
//       fixPercentage >= phase.range[0] && fixPercentage <= phase.range[1]
//   );

//   return matchedPhase
//     ? matchedPhase.description
//     : { es: "Fase Desconocida", en: "Unknown Phase" };
// }
export function getLunarPhaseDescription(phasePercentage) {
  const fixPercentage =
    phasePercentage < 0 ? 1 + (phasePercentage % 1) : phasePercentage % 1; // Manejar valores negativos
  const phaseMap = [
    { range: [0.0, 0.01], description: { es: "Luna Nueva", en: "New Moon" } },
    {
      range: [0.01, 0.25],
      description: { es: "Luna Creciente", en: "Waxing Crescent" },
    },
    {
      range: [0.25, 0.5],
      description: { es: "Cuarto Creciente", en: "First Quarter" },
    },
    {
      range: [0.5, 0.75],
      description: { es: "Luna Gibosa Creciente", en: "Waxing Gibbous" },
    },
    { range: [0.75, 1.0], description: { es: "Luna Llena", en: "Full Moon" } },
    {
      range: [0.75, 0.99],
      description: { es: "Luna Gibosa Menguante", en: "Waning Gibbous" },
    },
    {
      range: [0.5, 0.75],
      description: { es: "Cuarto Menguante", en: "Last Quarter" },
    },
    {
      range: [0.25, 0.5],
      description: { es: "Luna Menguante", en: "Waning Crescent" },
    },
  ];

  const matchedPhase = phaseMap.find(
    (phase) =>
      fixPercentage >= phase.range[0] && fixPercentage <= phase.range[1]
  );

  return matchedPhase
    ? matchedPhase.description
    : { es: "Fase Desconocida", en: "Unknown Phase" };
}

export function formatEclipseDate({ calendarDate, type = "short" }) {
  return calendarDate
    ? new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: type,
        day: "numeric",
      }).format(new Date(calendarDate))
    : null;
}

export function convertMinutesToHMS(minutes) {
  if (isNaN(minutes)) {
    return "Invalid input";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);
  const seconds = Math.floor((remainingMinutes % 1) * 60);

  return `${hours} h ${remainingMinutes} m ${seconds} s`;
}

// Tu array de eclipses

// Función para obtener el próximo eclipse de un tipo específico
export function getNextEclipse(type) {
  // Importar el módulo y acceder a la propiedad 'default'
  const eclipses = [
    {
      calendar_date: "2023 Oct 14",
      td_of_greatest_eclipse: "18:00:41",
      elipseType: "Annular",
      duration: "05m17s",
      type: 1,
      date: 1697306441000,
    },
    {
      calendar_date: "2041 Oct 25",
      td_of_greatest_eclipse: "01:36:22",
      elipseType: "Annular",
      duration: "06m07s",
      type: 1,
      date: 2266277782000,
    },
    {
      calendar_date: "2059 Nov 05",
      td_of_greatest_eclipse: "09:18:15",
      elipseType: "Annular",
      duration: "07m00s",
      type: 1,
      date: 2835249495000,
    },
    {
      calendar_date: "2077 Nov 15",
      td_of_greatest_eclipse: "17:07:56",
      elipseType: "Annular",
      duration: "07m54s",
      type: 1,
      date: 3404221676000,
    },
    {
      calendar_date: "2095 Nov 27",
      td_of_greatest_eclipse: "01:02:57",
      elipseType: "Annular",
      duration: "08m47s",
      type: 1,
      date: 3973194177000,
    },
    {
      calendar_date: "2023 Oct 28",
      td_of_greatest_eclipse: "20:15:18",
      elipseType: "Partial",
      duration: "01h17m",
      type: 2,
      date: 1698524118000,
    },
    {
      calendar_date: "2024 Mar 25",
      td_of_greatest_eclipse: "07:13:59",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1711350839000,
    },
    {
      calendar_date: "2024 Sep 18",
      td_of_greatest_eclipse: "02:45:25",
      elipseType: "Partial",
      duration: "01h03m",
      type: 2,
      date: 1726627525000,
    },
    {
      calendar_date: "2025 Mar 14",
      td_of_greatest_eclipse: "06:59:56",
      elipseType: "Total",
      duration: "03h38m",
      type: 2,
      date: 1741935596000,
    },
    {
      calendar_date: "2025 Sep 07",
      td_of_greatest_eclipse: "18:12:58",
      elipseType: "Total",
      duration: "03h29m",
      type: 2,
      date: 1757268778000,
    },
    {
      calendar_date: "2026 Mar 03",
      td_of_greatest_eclipse: "11:34:52",
      elipseType: "Total",
      duration: "03h27m",
      type: 2,
      date: 1772537692000,
    },
    {
      calendar_date: "2026 Aug 28",
      td_of_greatest_eclipse: "04:14:04",
      elipseType: "Partial",
      duration: "03h18m",
      type: 2,
      date: 1787890444000,
    },
    {
      calendar_date: "2027 Feb 20",
      td_of_greatest_eclipse: "23:14:06",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1803165246000,
    },
    {
      calendar_date: "2027 Jul 18",
      td_of_greatest_eclipse: "16:04:09",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1815926649000,
    },
    {
      calendar_date: "2027 Aug 17",
      td_of_greatest_eclipse: "07:14:59",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1818486899000,
    },
    {
      calendar_date: "2028 Jan 12",
      td_of_greatest_eclipse: "04:14:13",
      elipseType: "Partial",
      duration: "00h56m",
      type: 2,
      date: 1831263253000,
    },
    {
      calendar_date: "2028 Jul 06",
      td_of_greatest_eclipse: "18:20:57",
      elipseType: "Partial",
      duration: "02h21m",
      type: 2,
      date: 1846520457000,
    },
    {
      calendar_date: "2028 Dec 31",
      td_of_greatest_eclipse: "16:53:15",
      elipseType: "Total",
      duration: "03h29m",
      type: 2,
      date: 1861894395000,
    },
    {
      calendar_date: "2029 Jun 26",
      td_of_greatest_eclipse: "03:23:22",
      elipseType: "Total",
      duration: "03h40m",
      type: 2,
      date: 1877138602000,
    },
    {
      calendar_date: "2029 Dec 20",
      td_of_greatest_eclipse: "22:43:12",
      elipseType: "Total",
      duration: "03h33m",
      type: 2,
      date: 1892500992000,
    },
    {
      calendar_date: "2030 Jun 15",
      td_of_greatest_eclipse: "18:34:34",
      elipseType: "Partial",
      duration: "02h24m",
      type: 2,
      date: 1907778874000,
    },
    {
      calendar_date: "2030 Dec 09",
      td_of_greatest_eclipse: "22:28:51",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1923085731000,
    },
    {
      calendar_date: "2031 May 07",
      td_of_greatest_eclipse: "03:52:02",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1935892322000,
    },
    {
      calendar_date: "2031 Jun 05",
      td_of_greatest_eclipse: "11:45:17",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1938426317000,
    },
    {
      calendar_date: "2031 Oct 30",
      td_of_greatest_eclipse: "07:46:45",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 1951112805000,
    },
    {
      calendar_date: "2032 Apr 25",
      td_of_greatest_eclipse: "15:14:51",
      elipseType: "Total",
      duration: "03h31m",
      type: 2,
      date: 1966518891000,
    },
    {
      calendar_date: "2032 Oct 18",
      td_of_greatest_eclipse: "19:03:40",
      elipseType: "Total",
      duration: "03h16m",
      type: 2,
      date: 1981739020000,
    },
    {
      calendar_date: "2033 Apr 14",
      td_of_greatest_eclipse: "19:13:51",
      elipseType: "Total",
      duration: "03h35m",
      type: 2,
      date: 1997118831000,
    },
    {
      calendar_date: "2033 Oct 08",
      td_of_greatest_eclipse: "10:56:23",
      elipseType: "Total",
      duration: "03h22m",
      type: 2,
      date: 2012381783000,
    },
    {
      calendar_date: "2034 Apr 03",
      td_of_greatest_eclipse: "19:06:59",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2027704019000,
    },
    {
      calendar_date: "2034 Sep 28",
      td_of_greatest_eclipse: "02:47:37",
      elipseType: "Partial",
      duration: "00h27m",
      type: 2,
      date: 2043024457000,
    },
    {
      calendar_date: "2035 Feb 22",
      td_of_greatest_eclipse: "09:06:12",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2055747972000,
    },
    {
      calendar_date: "2035 Aug 19",
      td_of_greatest_eclipse: "01:12:15",
      elipseType: "Partial",
      duration: "01h17m",
      type: 2,
      date: 2071098735000,
    },
    {
      calendar_date: "2036 Feb 11",
      td_of_greatest_eclipse: "22:13:06",
      elipseType: "Total",
      duration: "03h22m",
      type: 2,
      date: 2086380786000,
    },
    {
      calendar_date: "2036 Aug 07",
      td_of_greatest_eclipse: "02:52:32",
      elipseType: "Total",
      duration: "03h51m",
      type: 2,
      date: 2101690352000,
    },
    {
      calendar_date: "2037 Jan 31",
      td_of_greatest_eclipse: "14:01:38",
      elipseType: "Total",
      duration: "03h17m",
      type: 2,
      date: 2117023298000,
    },
    {
      calendar_date: "2037 Jul 27",
      td_of_greatest_eclipse: "04:09:53",
      elipseType: "Partial",
      duration: "03h12m",
      type: 2,
      date: 2132280593000,
    },
    {
      calendar_date: "2038 Jan 21",
      td_of_greatest_eclipse: "03:49:52",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2147658592000,
    },
    {
      calendar_date: "2038 Jun 17",
      td_of_greatest_eclipse: "02:45:02",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2160355502000,
    },
    {
      calendar_date: "2038 Jul 16",
      td_of_greatest_eclipse: "11:35:56",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2162892956000,
    },
    {
      calendar_date: "2038 Dec 11",
      td_of_greatest_eclipse: "17:44:60",
      elipseType: "Penumbral",
      duration: "Sin Datos",
      type: 2,
      date: 2175702240000,
    },
    {
      calendar_date: "2039 Jun 06",
      td_of_greatest_eclipse: "18:54:25",
      elipseType: "Partial",
      duration: "02h59m",
      type: 2,
      date: 2190999265000,
    },
    {
      calendar_date: "2039 Nov 30",
      td_of_greatest_eclipse: "16:56:28",
      elipseType: "Partial",
      duration: "03h26m",
      type: 2,
      date: 2206284988000,
    },
    {
      calendar_date: "2040 May 26",
      td_of_greatest_eclipse: "11:46:22",
      elipseType: "Total",
      duration: "03h31m",
      type: 2,
      date: 2221645582000,
    },
    {
      calendar_date: "2040 Nov 18",
      td_of_greatest_eclipse: "19:04:41",
      elipseType: "Total",
      duration: "03h40m",
      type: 2,
      date: 2236878281000,
    },
  ];

  const currentDate = new Date().getTime();

  // Filtrar eclipses del tipo deseado y con fechas futuras
  const filteredEclipses = eclipses.filter(
    (eclipse) => eclipse.type === type && eclipse.date > currentDate
  );

  // Ordenar los eclipses por fecha ascendente
  filteredEclipses.sort((a, b) => a.date - b.date);

  // Devolver el primer eclipse de la lista filtrada (el próximo eclipse)
  return filteredEclipses;
}
