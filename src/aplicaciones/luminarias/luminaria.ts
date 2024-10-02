import { IDispositivo } from "../../generales";

export interface ILuminaria {
  identificacion?: string;
  marca?: string;
  modelo?: string;
  consumo20?: number;
  consumo40?: number;
  consumo60?: number;
  consumo80?: number;
  consumo100?: number;
  horasVida?: number;
  deveui?: string;
  // Virtuals
  dispositivo?: IDispositivo;
}
