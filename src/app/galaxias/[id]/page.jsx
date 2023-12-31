import { fetchGalaxy } from "@/app/libs/data";
import { CelestialObjectDetails } from "@/app/ui/CelestialObjectDetails ";
import ImageZoom from "@/app/ui/ImageZoom";
export default async function page({ params }) {
  const id = decodeURIComponent(params.id);
  const { galaxy } = fetchGalaxy({ id });
  //   console.log(galaxy);
  //   console.log(name);

  return (
    <div className="px-5 dark:text-white xl:px-24 constellation bg-[#fafafa] dark:bg-gray-800 h-full min-h-[calc(100vh-80px)]">
      <div className="p-5">
        <div className="gap-28 xl:flex xl:my-5">
          <ImageZoom celestial={galaxy} path="/images/galaxies" type="galaxy" />
          <div>
            <h2 className="mb-5 text-4xl font-bold text-center uppercase font-Antonio xl:text-left xl:text-7xl ">
              {galaxy?.galaxy?.original}
            </h2>
            <p
              className="font-Metropolis dark:text-white xl:leading-7"
              data-testid="galaxy-desc"
            >
              {galaxy?.desc?.translation}
            </p>
          </div>
        </div>
        <ul
          className="flex flex-col flex-wrap gap-3 my-5 xl:flex-row"
          data-testid="galaxy-info-list"
        >
          {galaxy?.galaxyData?.map((info) => {
            return (
              <CelestialObjectDetails
                key={`${crypto.randomUUID()}`}
                label={info?.label.es}
                desc={info?.info}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
