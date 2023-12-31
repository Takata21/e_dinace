import { create } from "zustand";

const URL = "https://ssd.jpl.nasa.gov/api/horizons.api";
// const API_URL = "https://flat-hare-60.deno.dev/";
const createEphemerisUrl = ({
  targetBody: COMMAND = "499",
  latitude: LATITUDE = "8.488207",
  longitude: LONGITUDE = "-80.32873",
  startTime: START_TIME = "2023-05-10",
  stopTime: STOP_TIME = "2023-05-21",
}) => {
  return `${URL}?format=json&COMMAND='${COMMAND}'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='coord@399'&SITE_COORD='${LONGITUDE},${LATITUDE},0'&START_TIME='${START_TIME}'&STOP_TIME='${STOP_TIME}'&CSV_FORMAT='YES'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'&COORD_TYPE=GEODETIC`;
};

export const useEphemerisStore = create((set) => {
  return {
    loading: false,
    ephemeris: null,
    empty: true,

    fetchEphemeris: async (params) => {
      set({ loading: true });

      const url = createEphemerisUrl(params);

      // console.log(url);

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      };

      try {
        const response = await fetch("/api/ephemeris", requestOptions);
        if (!response.ok) {
          throw new Error("La solicitud no se completó correctamente");
        }
        const data = await response.json();
        // console.log(data);
        set({ ephemeris: data, empty: false });
        return data;
      } catch (error) {
        set({ empty: true });
        console.error("Error al obtener efemérides:", error);
      } finally {
        set({ loading: false });
      }
    },
  };
});
