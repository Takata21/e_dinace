import { Select } from "@/app/ui/eclipses/select";
import { lunarEclipseTypesOptions } from "../libs/constant";
import { fetchLunarEclipses } from "../libs/data";
import { Card } from "@/app/ui/eclipses/lunar/card";
export const metadata = {
  title: "Eclipses Lunares | DINACE",
  description: "",
};
export default function page({ searchParams }) {
  const query = searchParams?.query || "all";
  const currentPage = Number(searchParams?.page) || 1;
  const { eclipses, totalPages, totalEclipses } = fetchLunarEclipses(
    query,
    currentPage
  );
  return (
    <div className="p-5">
      <section className="mx-5 mb-5">
        <h2 className="text-lg font-medium">Eclipses Lunares</h2>
        <Select title="Filtrar" options={lunarEclipseTypesOptions} />
        <h3 className="font-medium">Totales: {totalEclipses} </h3>
      </section>
      <section>
        <div className=" justify-center grid gap-5 xl:gap-10 px-5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] min-h-[calc(100vh-380px)]">
          {eclipses?.map((eclipse) => (
            <Card key={eclipse.seq_num} eclipse={eclipse} />
          ))}
        </div>
      </section>
    </div>
  );
}
