import { useSearchParams, usePathname, useRouter } from "next/navigation";
export function TimeSpecification() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleStartTime = (e) => {
    const startParamName = "START_TIME";
    const startParamValue = e.target.value || "2021-05-21";

    const params = new URLSearchParams(searchParams);

    if (startParamValue) {
      params.set(startParamName, startParamValue);
    } else {
      params.delete(startParamName);
    }

    replace(`${pathname}?${params}`);
  };
  const handleStopTime = (e) => {
    const stopParamName = "STOP_TIME";
    const stopParamValue = e.target.value || "2021-05-10";

    const params = new URLSearchParams(searchParams);

    if (stopParamValue) {
      params.set(stopParamName, stopParamValue);
    } else {
      params.delete(stopParamName);
    }

    replace(`${pathname}?${params}`);
  };

  return (
    <div className="">
      <h3 className="mb-3 text-sm font-medium">Especificación de Tiempo</h3>
      <div className="mb-3">
        <label
          htmlFor="start-time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fecha de inicio:
        </label>
        <input
          required
          type="date"
          name="startTime"
          id="start-time"
          className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded-lg "
          min="1000-01-01"
          onChange={(e) => handleStartTime(e)}
          defaultValue={searchParams.get("START_TIME")?.toString()}
        />
      </div>
      <div>
        <label
          htmlFor="stop-time"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Fecha final:
        </label>
        <input
          required
          type="date"
          name="stopTime"
          id="stop-time"
          className="text-gray-900 dark:bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 dark:text-white focus:ring-blue-500 focus:border-blue-500 rounded-lg "
          max="9999-12-31"
          onChange={(e) => handleStopTime(e)}
          defaultValue={searchParams.get("STOP_TIME")?.toString()}
        />
      </div>
    </div>
  );
}
