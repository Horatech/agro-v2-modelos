import { ICoordenadas } from "../../../auxiliares";
import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  Semaforo,
} from "../../../generales";

export interface ICisterna {
  _id?: string;
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
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
