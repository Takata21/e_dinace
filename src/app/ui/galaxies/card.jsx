import Link from "next/link";

export function Card({ galaxy }) {
  return (
    <Link
      href={`/constelaciones/${galaxy.name.translation}`}
      className="h-56 overflow-hidden rounded-sm group xl:flex-grow"
    >
      <div className="relative h-full font-semibold tracking-wider text-white uppercase font-Bellefair">
        <img
          src={`/images/galaxies/${galaxy.id}.webp`}
          alt={`imagen de la galaxia ${galaxy.name.translation} `}
          loading="lazy"
          className="w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center m-auto text-xl transition duration-500 ease-in group-hover:bg-black/50">
          <h5 className="transition duration-500 ease-in group-hover:scale-150 font-Bellefair">
            {galaxy.name.translation}
          </h5>
        </div>
      </div>
    </Link>
  );
}
