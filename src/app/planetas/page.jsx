import { PLANETS } from "../libs/constant";
import PlanetsCard from "../ui/planeta/planetsCard";

export default function page() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center w-full min-h-screen gap-5 p-5 dark:bg-[#18202b] planets">
      {PLANETS.map((planet) => (
        <PlanetsCard key={planet.id} info={planet} />
      ))}
    </div>
  );
}
