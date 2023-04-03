import { ICoordenadas } from "../../../auxiliares";
import { Semaforo } from "../../../generales";

export interface IUpdateCisterna {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
}
