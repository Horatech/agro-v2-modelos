import { IDispositivo } from "../generales";

export interface IAck {
  dispositivo: IDispositivo;
  deveui: string;
  deviceName: string;
  acknowledged: boolean;
  fCnt: string;
  tags?: { [key: string]: string };
}
