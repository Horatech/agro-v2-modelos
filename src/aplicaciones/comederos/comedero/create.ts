import { ConfiguracionComederos } from "../../../generales";

export interface ICreateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  //
  nombre: string;
  idDispositivos?: string[];
}
