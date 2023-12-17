import { Select } from "@/app/ui/eclipses/select";
import { solarEclipseTypesOptions } from "../libs/constant";
import { fetchSolarEclipses } from "../libs/data";
import { Card } from "@/app/ui/eclipses/solar/card";
import Pagination from "../ui/Pagination";
export const metadata = {
  title: "Eclipses Solares | DINACE",
  description: "",
};
export default function page({ searchParams }) {
  const query = searchParams?.query || "all";
  const currentPage = Number(searchParams?.page) || 1;
  const { eclipses, totalPages, totalEclipses } = fetchSolarEclipses(
    query,
    currentPage
  );
  return (
    <div className="p-5">
      <section className="mx-5 mb-5">
        <h2 className="text-lg font-medium">Eclipses Lunares</h2>
        <Select title="Filtrar" options={solarEclipseTypesOptions} />
        <h3 className="font-medium">Totales: {totalEclipses} </h3>
      </section>
      <section>
        <div className=" justify-center grid gap-5 xl:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-h-[calc(100vh-380px)]">
          {eclipses?.map((eclipse) => (
            <Card key={eclipse.seq_num} eclipse={eclipse} />
          ))}
        </div>
        <Pagination totalPages={totalPages} />
      </section>
    </div>
  );
}
