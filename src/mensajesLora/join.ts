import { IDispositivo } from "../generales";
import { IMetadatos } from "./metadatos";

export interface IJoin {
  dispositivo: IDispositivo;
  deveui: string;
  deviceName?: string;
  metadatos?: IMetadatos[];
  adr?: boolean;
  dr?: number;
  tags?: { [key: string]: string };
}
