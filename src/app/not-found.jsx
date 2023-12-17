import Link from "next/link";
import images from "../../public/images/NGC3132.jpg";
export default function NotFound() {
  return (
    <div
      className="not-found"
      style={{
        backgroundImage: `url(${images.src})`,
      }}
    >
      <div className="absolute z-10 flex flex-col items-center justify-center max-w-lg text-white">
        <h2 className=" text-9xl">404</h2>
        <p className="text-2xl">
          Parece que nuestros astronautas se fueron a otra galaxia 🚀🌌.
        </p>
        <Link href="/" className="text-2xl underline">
          Intenta volver a la Tierra .
        </Link>
      </div>
    </div>
  );
}
