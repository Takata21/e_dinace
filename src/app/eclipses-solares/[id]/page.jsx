import {
  convertMinutesToHMS,
  formatEclipseDate,
  formatLunarEclipseType,
  formatSolarEclipseType,
} from "@/app/libs/astronomyUtils";
import { SOLAR_ECLIPSE_TYPES } from "@/app/libs/constant";
import { getSolarEclipseInformation } from "@/app/libs/data";

export default function page({ params }) {
  const id = params.id;

  const {
    seq_num: seq,
    calendar_date: calendarDate,
    td_of_greatest_eclipse: tdOfGreatestEclipse,
    ΔT: deltaT,
    luna_num: lunaNum,
    ecl_type: eclType,
    gamma,
    ecl_mag: eclMag,
    lat: latitude,
    long: longitude,
    sun_alt: sunAltitude,
    path_width_km: pathWidthKm,
    central_dur: centralDuration,
  } = getSolarEclipseInformation({ id });
  return (
    <div className="flex flex-col justify-between w-full min-h-screen gap-5 p-5 text-white bg-white dark:bg-gray-800">
      <div className="flex flex-col justify-between w-full min-h-screen p-5 text-white bg-white xl:flex-row dark:bg-gray-800">
        <section className=" max-w-[367px] p-3 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700 xl:h-max">
          <div className="dark:text-white">
            <h2>Fecha:</h2>
            <p>{formatEclipseDate({ calendarDate, type: "long" })}</p>
            <div>
              <h2>Tipo:</h2>

              <p className="text-lg font-semibold xl:font-bold xl:text-2xl">
                {SOLAR_ECLIPSE_TYPES[eclType?.trim()]}
              </p>
            </div>
          </div>
          <div
            className="text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <p className="text-xs text">
              <span className="font-medium">ADVERTENCIA! </span>
              No mires directamente al Sol durante un eclipse sin protección.
              Puede causar daño ocular grave.
            </p>
          </div>
        </section>

        <div className="relative h-full my-5 xl:my-0 min-h-[298px]">
          <img
            src={`/images/solarEclipses/${seq}.webp`}
            alt={`Imagen informativa de los lugares afectados por el  eclipse solar del ${formatEclipseDate(
              { calendarDate, type: "long" }
            )}`}
            className="h-full rounded"
            data-testid="solar-eclipse-image"
          />
        </div>
        <section className="flex flex-col gap-3 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700">
          <div
            className="flex flex-col gap-5 p-5 dark:text-white"
            data-testid="solar-eclipse-info"
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Fecha en el Calendario:
              </h2>
              <p>{formatEclipseDate({ calendarDate, type: "long" })}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Tiempo Dinámico del Eclipse Más Grande:
              </h2>
              <p>{tdOfGreatestEclipse}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Diferencia de Tiempo (ΔT):
              </h2>
              <p>{deltaT}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Número de la Luna:
              </h2>
              <p>{lunaNum}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Tipo de Eclipse:
              </h2>
              <p>{SOLAR_ECLIPSE_TYPES[eclType?.trim()]}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">Gamma:</h2>
              <p>{gamma}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Magnitud del Eclipse :
              </h2>
              <p>{eclMag}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">Latitud:</h2>
              <p>{latitude}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">Longitud:</h2>
              <p>{longitude}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Altitud del Sol:
              </h2>
              <p>{sunAltitude}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Ancho del Camino (km):
              </h2>
              <p>{pathWidthKm?.length === 0 ? "Sin Datos" : pathWidthKm}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold dark:text-gray-200">
                Duración del Eclipse :
              </h2>
              <p>
                <span>
                  {centralDuration?.length === 0
                    ? "Sin Datos"
                    : convertMinutesToHMS(centralDuration)}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
