export function CelestialObjectDetails({ label, desc }) {
  return (
    <li className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64 bg-[#f7f7f9] rounded-sm dark:bg-gray-800">
      <span className="text-lg font-semibold uppercase opacity-50 dark:text-white">
        {label.replace(/([A-Z])/g, " $1")}
      </span>
      <span className="w-1/2 text-right uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
        {desc.indexOf(",", 50) !== -1
          ? desc.substring(0, desc.indexOf(",", 50))
          : desc}
      </span>
    </li>
  );
}
