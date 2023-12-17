"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function Select({ options }) {
  const [filter, setFilter] = useState("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    setFilter(term);
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mb-3 xl:w-64">
      <label
        htmlFor="small"
        className="block mt-5 mb-3 text-sm font-medium text-gray-900 dark:text-white"
      >
        Filtrar
      </label>
      <select
        id="small"
        className="block w-full p-2 mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg xl:mb-0 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handleSearch(e.target.value)}
        value={filter}
      >
        {options.map((option, index) => {
          return (
            <option value={option.value} key={crypto.randomUUID()}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
