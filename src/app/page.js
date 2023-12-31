import { getNextEclipse } from "@/app/libs/astronomyUtils";
import { MoonPhase } from "./ui/Home/MoonPhase";
import { Slider } from "./ui/Home/Slider/Slider";
import EclipseCard from "./ui/Home/EclipseCard";

export default function Home() {
  const nextType1Eclipse = getNextEclipse(1);
  const nextType2Eclipse = getNextEclipse(2);
  return (
    <div className="relative min-h-screen">
      <Slider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 my-5 g font-Space p-4">
        <MoonPhase />
        <EclipseCard info={nextType1Eclipse[0]} />
        <EclipseCard info={nextType2Eclipse[0]} />
      </div>
    </div>
  );
}
