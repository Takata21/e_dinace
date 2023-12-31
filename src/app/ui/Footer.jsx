import {
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import Link from "next/link";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col-reverse items-center gap-5 px-12 py-2 bg-[#444] xl:flex-row">
      <div className="flex items-center gap-5">
        <img
          src="/images/logo-footer.png"
          width={100}
          alt="utp logo"
          className="hidden xl:block xl:w-28"
        />
        <div className=" font-medium text-center text-white xl:text-left text-[13px]">
          <span>Universidad Tecnológica de Panamá - {year}</span>
          <p>
            Avenida Universidad Tecnológica de Panamá, Vía Puente Centenario,
            Campus Metropolitano Víctor Levi Sasso.
          </p>
          <p>
            Teléfono: <br className="md:hidden" /> 560-3000 o marque
            gratuitamente al <br className="md:hidden" /> Centro de Atención
            Ciudadana 3-1-1
          </p>
          <p>
            Correo electrónico: <br className="md:hidden" />
            buzondesugerencias@utp.ac.pa
          </p>
          <Link href="/disclaimer" className="underline">
            Términos de Uso
          </Link>
          <span className="hidden">Make by MTakata</span>
        </div>
      </div>
      <div className="flex gap-2 xl:absolute right-12 bottom-5">
        <a
          href="https://www.facebook.com/OapUtp"
          className="flex items-center text-black  justify-center w-8 h-8 bg-white rounded-full hover:bg-[#29166F] hover:text-white transition-bg duration-500 ease-in-out "
          aria-label="Ir al facebook dinace"
        >
          <FaFacebook />
        </a>
        <a
          href="twitter.com/oaputp"
          className="flex items-center text-black  justify-center w-8 h-8 bg-white rounded-full hover:bg-[#29166F] hover:text-white transition-bg duration-500 ease-in-out "
          aria-label="Ir al Twitter dinace"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.youtube.com/user/UTPPanama"
          className="flex items-center text-black  justify-center w-8 h-8 bg-white rounded-full hover:bg-[#29166F] hover:text-white transition-bg duration-500 ease-in-out "
          aria-label="Ir al youtube dinace"
        >
          <FaYoutube />
        </a>
        <a
          href="www.instagram.com/oaputp"
          className="flex items-center text-black  justify-center w-8 h-8 bg-white rounded-full hover:bg-[#29166F] hover:text-white transition-bg duration-500 ease-in-out "
          aria-label="Ir al instagram dinace"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
