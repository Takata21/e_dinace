"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function CalendarSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 3000);

  return (
    <form className="flex flex-col gap-3 xl:w-[500px] ">
      <label htmlFor="search" className="visually-hidden">
        Seleciona Fecha y Hora
      </label>
      <div className="flex items-center">
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
{
  /* <div className="flex items-stretch">
  <input
    type="datetime-local"
    name="datetime-input"
    id="date-time-input"
    className="bg-gray-700 border w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 rounded rounded-r-none "
    // ref={inputRef}
    // value={selectedDate}
    // onKeyDown={handleKeyDown}
    // onChange={handleChange}
  />

  <button
    type="submit"
    className="flex items-center justify-center text-white bg-blue hover:bg-blue/80 focus:ring-4 focus:ring-blue-300 rounded text-sm px-5 py-2.5 xl:mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 rounded-l-none font-extrabold h-[46px] xl:h-full min-h-[46px]"
    // onClick={handleClick}
  >
    <BsSearch />
  </button>
</div>; */
}
