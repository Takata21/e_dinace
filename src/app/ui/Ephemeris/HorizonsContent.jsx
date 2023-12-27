"use client";
import { useEphemerisStore } from "@/app/store/EphemerisStore";
import { HorizonsTable } from "./HorizonsTable";
import { EphemerisInfo } from "./EphemerisInfo";

export function HorizonsContent() {
  const { ephemeris, loading } = useEphemerisStore();
  console.log(ephemeris);
  return (
    <div>
      {loading ? (
        <p>loader</p>
      ) : ephemeris === null ? (
        <div className="flex items-center justify-center h-[calc(100vh-80px)] flex-col">
          <img
            src="/images/dinace_logo.png"
            alt="dinace logo"
            width={"250px"}
            height={"250px"}
          />
          <p className="px-5 font-medium">
            Para comenzar, por favor ingresa la fecha y/o lugar para generar
            efemérides.
          </p>
        </div>
      ) : (
        <div className="px-2 ">
          <h2 className="my-2 mb-3 font-bold text-1xl">
            Información de Efemérides Generada(s)
          </h2>
          <EphemerisInfo />
          <HorizonsTable info={ephemeris?.result} />
        </div>
      )}
    </div>
  );
}
