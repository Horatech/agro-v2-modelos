import { IDispositivo } from "../../../generales";

export interface IComedero {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  nombre: string;
  idDispositivos: string[];
  //
  dispositivos: IDispositivo[];
}
