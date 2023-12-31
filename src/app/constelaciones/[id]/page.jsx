import { fetchConstellation } from "@/app/libs/data";
import { CelestialObjectDetails } from "@/app/ui/CelestialObjectDetails ";
import ImageZoom from "@/app/ui/ImageZoom";
export default async function page({ params }) {
  const name = params.id;

  const { constellation } = fetchConstellation({ name });

  return (
    <div className="px-5 dark:text-white xl:px-24 constellation bg-[#fafafa] dark:bg-gray-800 h-full min-h-[calc(100vh-80px)]">
      <div className="p-5">
        <div className="gap-8 xl:flex xl:my-5">
          <ImageZoom
            celestial={constellation}
            path="/images/constellations"
            type="constellation"
          />
          <div>
            <h2 className="mb-5 text-4xl font-bold text-center uppercase font-Antonio xl:text-left xl:text-7xl ">
              {constellation?.name}
            </h2>
            <p
              className="font-Metropolis dark:text-white xl:leading-7"
              data-testid="constellation-desc"
            >
              {constellation?.description}
            </p>
          </div>
        </div>
        <ul
          className="flex flex-col flex-wrap gap-3 my-5 xl:flex-row"
          data-testid="constellation-info-list"
        >
          {constellation?.constellationInfo?.map((info, index) => {
            return (
              <CelestialObjectDetails
                key={index}
                label={info.label}
                desc={info.desc}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
