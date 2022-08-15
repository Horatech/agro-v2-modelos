import { IDispositivo } from "../../../generales";

export interface IComedero {
  nombre: string;
  idDispositivos: string[];
  //
  dispositivos: IDispositivo[];
}
