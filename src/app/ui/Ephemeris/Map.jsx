import {
  Dialog,
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
          </DialogHeader>
          <div className="">
            <MapWrapper handleMap={handleMap} horizons={horizons} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
