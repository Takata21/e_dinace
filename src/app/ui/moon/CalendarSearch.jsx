"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function CalendarSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((term) => {
    // console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 3000);

  return (
    <form className="flex  xl:w-[500px]">
      <div className="flex flex-col w-full gap-3">
        <label htmlFor="search" className="visually-hidden">
          Seleciona Fecha y Hora
        </label>
        <input
          type="datetime-local"
          name="datetime-input"
          id="date-time-input"
          className="bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded rounded-r-none "
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          required
          defaultValue={Date.UTC()}
          min="2011-01-01T00:00"
        />
      </div>
    </form>
  );
}
