import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { MapWrapper } from "./MapWrapper";

export function Map({ handleMap, horizons }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <a id="my-anchor-element" className="my-anchor-element">
            <FaMapMarkerAlt
              size={25}
              color="#2c84cb"
              className="hover:#007bff50"
            />
          </a>
          <Tooltip
            anchorSelect="#my-anchor-element"
            content="Obtener Ubicación"
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Selecciona tu ubicación en el mapa.</DialogTitle>
            <DialogDescription>
              Haz clic y arrastra para moverte, y usa la rueda del mouse o gesto
              de pellizco. Confirma cuando estés listo. ¡Gracias!
            </DialogDescription>
            <div className="flex justify-end ">
              <DialogClose asChild className="mt-0 mb-0">
                <button className="focus:outline-none text-white bg-[#0B602B] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 my-5 w-max">
                  Aceptar
                </button>
              </DialogClose>
            </div>
          </DialogHeader>
          <div className="">
            <MapWrapper handleMap={handleMap} horizons={horizons} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
