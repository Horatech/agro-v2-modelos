import { ConfiguracionComederos } from "../../../generales";

export interface IUpdateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  //
  nombre?: string;
  idDispositivos?: string[];
}
