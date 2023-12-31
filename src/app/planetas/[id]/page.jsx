import { fetchPlanet } from "@/app/libs/data";
import { getId } from "@/app/libs/utils";

export default async function pages({ params }) {
  const name = params.id;

  const { planet } = fetchPlanet({ name });
  return (
    <div className="px-5 dark:text-white xl:px-24 planets bg-[#fafafa] dark:bg-gray-800 min-h-[calc(100vh-80px)]">
      <div className="p-5">
        <div className="gap-8 xl:flex xl:my-5">
          {/* <Zoom> */}
          <img
            src={`/images/planets/${planet.englishName.toLowerCase()}.png`}
            alt=""
            className="xl:min-w-[350px] xl:min-h-[300px]"
            data-testid="planet-img"
          />
          {/* </Zoom> */}
          <div>
            <h2 className="mb-5 text-4xl font-bold text-center text-black uppercase dark:text-white font-Antonio xl:text-left xl:text-7xl">
              {planet?.name}
            </h2>
            <p
              className="text-black dark:text-white font-Metropolis xl:leading-7"
              data-testid="planet-desc"
            >
              {planet?.overview}
            </p>
          </div>
        </div>
        <ul
          className="grid gap-3 my-5 md:grid-cols-3 xl:grid-cols-4 "
          data-testid="planet-info-list"
        >
          {planet?.info.map((item) => {
            if (item.value !== "" && item.value !== null) {
              return (
                <li
                  key={getId()}
                  className="dark:border-[#ffffff50] border border-gray-200 py-4 px-4 flex justify-between items-center xl:flex-col xl:justify-start xl:items-start xl:w-64 bg-[#f7f7f9] rounded-sm dark:bg-gray-800"
                >
                  <span className="text-lg font-semibold uppercase opacity-50 dark:text-white">
                    {item?.title}
                  </span>
                  <span className="w-1/2 text-right uppercase font-Antonio xl:text-left xl:w-auto xl:text-xl">
                    <span dangerouslySetInnerHTML={{ __html: item.value }} />
                  </span>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
