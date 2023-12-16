import { Card } from "@/app/ui/constellations/card";
import { Bellefair } from "next/font/google";
import { fetchConstellations } from "../libs/data";
import Pagination from "../ui/Pagination";
import { Search } from "../ui/Search";
const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
});
export default function constelaciones({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data: constellations, totalPages } = fetchConstellations(
    query,
    currentPage
  );
  return (
    <div className={`p-5`}>
      <section className="mb-5">
        <Search placeholder="Introduce el nombre de la constelación..." />
      </section>
      <div
        className={`${bellefair.className} test-page font-Bellefair w-full gap-5   focus-visible:outline-none focus-visible:border-none`}
      >
        {constellations.map((constellation) => (
          <Card key={constellation.id} constellation={constellation} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
