import { IDispositivo } from "../generales";

export interface IDownlink {
  dispositivo: IDispositivo;
  deveui: string;
  puerto: number;
  payload: string;
}
