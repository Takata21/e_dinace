"use client";

import Zoom from "react-medium-image-zoom";
import "@/app/image-zoom.css";

export default function ImageZoom({ celestial, path, type }) {
  const source =
    type === "galaxy"
      ? `${path}/${celestial.id}.webp`
      : `${path}/${celestial.name}.webp`;

  return (
    <Zoom>
      <img
        src={source}
        alt=""
        className="xl:min-w-[350px] xl:min-h-[300px] rounded"
        data-testid="constellation-img"
      />
    </Zoom>
  );
}
