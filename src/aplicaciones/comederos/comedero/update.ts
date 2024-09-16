import { ConfiguracionComederos } from "../../../generales";

export interface IUpdateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  cicloAlimentacion?: {
    comienzo: string;
    final: string;
  };
  //
  nombre?: string;
  idDispositivos?: string[];
}
