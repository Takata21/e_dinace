import { Bellefair } from "next/font/google";
import Pagination from "../ui/Pagination";
import { Search } from "../ui/Search";
import { Card } from "../ui/galaxies/card";
import { fetchGalaxies } from "../libs/data";
export const metadata = {
  title: "Galaxias | DINACE",
  description: "",
};
const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});
export default function galaxias({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data: galaxies, totalPages } = fetchGalaxies(query, currentPage);
  return (
    <div className={`p-5`}>
      <section className="mb-5">
        <Search placeholder="Introduce el nombre de la galaxia..." />
      </section>
      <div
        className={`${bellefair.className} gallery font-Bellefair w-full gap-5   focus-visible:outline-none focus-visible:border-none`}
      >
        {galaxies.map((galaxy) => (
          <Card key={galaxy.id} galaxy={galaxy} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
