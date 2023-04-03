import { Color, Semaforo } from "../../../generales";

export interface ICreateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  //
  nombre: string;
  idDispositivos?: string[];
}
