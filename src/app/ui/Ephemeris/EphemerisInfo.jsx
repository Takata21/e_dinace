"use client";
import { EphemerisLabels } from "@/app/libs/constant";
import { useEphemerisStore } from "@/app/store/EphemerisStore";
import { getId } from "@/app/libs/utils";
import { getEphemerisInfo } from "@/app/libs/ephemerisUtils";
export function EphemerisInfo() {
  const { ephemeris } = useEphemerisStore();
  const data = getEphemerisInfo(ephemeris?.result);
  return (
    <div className="mb-5">
      <dl className="flex flex-col gap-2 text-base">
        {data.map((item, index) => (
          <div
            className="grid justify-between grid-cols-2 gap-2 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            key={getId()}
          >
            <dt className="pl-2 text-sm font-medium">
              {EphemerisLabels[index]}
            </dt>
            <dd className="">
              {item.replace(/{/g, "(").replace(/}/g, ")") === "undefined"
                ? "n.a"
                : item.replace(/{/g, "(").replace(/}/g, ")")}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
