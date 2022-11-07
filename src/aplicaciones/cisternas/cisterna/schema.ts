import { IDispositivo } from "../../../generales";

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
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
