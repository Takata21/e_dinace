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

  const { days, hours, minutes } = convertAge(data?.age);
  return (
    <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-black xl:flex-row">
      <section>
        <div className="rounded-md card">
          <h2>Hora (UTC):</h2>
          <p>{data?.time}</p>
          <div>
            <h2>Fase:</h2>
            <p className="text-2xl font-bold ">
              {getLunarPhaseDescription(data?.phase).es}
            </p>
            <pre></pre>
            <p>{`${data?.phase} % (${days}d ${hours}h ${minutes}m)`}</p>
          </div>
        </div>
      </section>
      <div className="relative h-full my-5 min-h-[388px]">
        <img
          src={data?.image?.url}
          alt={data?.image?.alt_text}
          className="h-full"
        />
      </div>

      <section className="flex flex-col gap-5">
        <div
          className="flex items-center p-1 mb-4 text-sm text-blue-400 bg-gray-800 rounded text-blue"
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
