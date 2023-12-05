import { MoonPhase } from "./ui/Home/MoonPhase";
import { Slider } from "./ui/Home/Slider/Slider";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Slider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 my-5 g font-Space p-4">
        <MoonPhase />
      </div>
    </div>
  );
}
