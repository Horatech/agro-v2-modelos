import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
} from "../../../generales";

export interface ICisterna {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
