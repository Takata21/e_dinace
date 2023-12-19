import {
  convertAge,
  formatCoordinates,
  formatGeographicCoordinates,
  getLunarPhaseDescription,
} from "../libs/astronomyUtils";
import { EARTH_DIAMETER } from "@/app/libs/constant";
import { CalendarSearch } from "../ui/moon/CalendarSearch";
import { fetchMoonPhase } from "../libs/data";
export default async function MoonPhases({ searchParams }) {
  const query = searchParams?.query || new Date().toISOString().slice(0, 16);
  const data = await fetchMoonPhase({ dateTimeValue: query });
  // const data = {
  //   image: {
  //     id: 568984,
  //     url: "https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005048/frames/730x730_1x1_30p/moon.8134.jpg",
  //     filename: "frames/730x730_1x1_30p/moon.8134.jpg",
  //     media_type: "Image",
  //     alt_text:
  //       "An image of the moon, as it would appear on 2023-12-05 21:00:00+00:00. (Frame: 8134)",
  //     width: 730,
  //     height: 730,
  //     pixels: 532900,
  //   },
  //   image_highres: {
  //     id: 568985,
  //     url: "https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005048/frames/5760x3240_16x9_30p/fancy/comp.8134.tif",
  //     filename: "frames/5760x3240_16x9_30p/fancy/comp.8134.tif",
  //     media_type: "Image",
  //     alt_text:
  //       "An image of the moon, as it would appear on 2023-12-05 21:00:00+00:00. (Frame: 8134)",
  //     width: 5760,
  //     height: 3240,
  //     pixels: 18662400,
  //   },
  //   su_image: {
  //     id: 877058,
  //     url: "https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005049/frames/730x730_1x1_30p/moon.8134.jpg",
  //     filename: "frames/730x730_1x1_30p/moon.8134.jpg",
  //     media_type: "Image",
  //     alt_text:
  //       "An image of the moon, as it would appear on 2023-12-05 21:00:00+00:00. (Frame: 8134)",
  //     width: 730,
  //     height: 730,
  //     pixels: 532900,
  //   },
  //   su_image_highres: {
  //     id: 877059,
  //     url: "https://svs.gsfc.nasa.gov/vis/a000000/a005000/a005049/frames/5760x3240_16x9_30p/fancy/comp.8134.tif",
  //     filename: "frames/5760x3240_16x9_30p/fancy/comp.8134.tif",
  //     media_type: "Image",
  //     alt_text:
  //       "An image of the moon, as it would appear on 2023-12-05 21:00:00+00:00. (Frame: 8134)",
  //     width: 5760,
  //     height: 3240,
  //     pixels: 18662400,
  //   },
  //   time: "2023-12-05T21:00",
  //   phase: 44.18,
  //   obscuration: 0,
  //   age: 22.481,
  //   diameter: 1776.2,
  //   distance: 403513,
  //   j2000_ra: 11.4599,
  //   j2000_dec: 6.5776,
  //   subsolar_lon: -98.191,
  //   subsolar_lat: -1.222,
  //   subearth_lon: -1.416,
  //   subearth_lat: -3.677,
  //   posangle: 21.894,
  // };
  const { days, hours, minutes } = convertAge(data?.age);
  return (
    <div className="flex flex-col  w-full min-h-screen p-5 text-white bg-black xl:flex-row justify-between">
      <section>
        <div className="rounded-md card">
          <h2>Hora (UTC):</h2>
          <p>{data?.time}</p>
          <div>
            <h2>Fase:</h2>
            <p className="text-2xl font-bold ">
              {getLunarPhaseDescription(data?.age).es}
            </p>
            <pre></pre>
            <p>{`${data?.phase} % (${days}d ${hours}h ${minutes}m)`}</p>
          </div>
        </div>
      </section>
      <div className="relative h-full my-5 min-h-[388px] ">
        <img
          src={data?.image?.url}
          alt={data?.image?.alt_text}
          className="h-full"
        />
      </div>

      <section className="flex flex-col gap-5">
        <div
          className="flex items-center p-1 mb-4 text-sm rounded text-blue bg-gray-800 text-blue-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <p className="">
            Fases lunares desde enero de 2012 hasta el año actual.
          </p>
        </div>
        <CalendarSearch />

        <div className="flex flex-col gap-5 card">
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">Diámetro:</h2>
            <p>{data?.diameter} arcsec</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">Distancia:</h2>
            <p>
              {data?.distance} km (
              {(data?.distance / EARTH_DIAMETER).toFixed(2)}
              &nbsp; diámetro(s) terrestres)
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">
              Ascensión Recta y Declinación J2000:
            </h2>

            <p>{formatCoordinates(data?.j2000_ra, data?.j2000_dec)}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">Longitud y Latitud Sub-Solar:</h2>
            <p>
              {formatGeographicCoordinates(
                data?.subsolar_lon,
                data?.subsolar_lat
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">Longitud y Latitud Sub-Estrella:</h2>
            <p>
              {formatGeographicCoordinates(
                data?.subearth_lon,
                data?.subearth_lat
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-gray-400">Ángulo de Posición:</h2>
            <p>{data?.posangle} °</p>
          </div>
        </div>
      </section>
    </div>
  );
}
