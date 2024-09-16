import { ConfiguracionComederos } from "../../../generales";

export interface IUpdateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  cicloAlimentacion?: {
    comienzo: Date;
    final: Date;
  };
  //
  nombre?: string;
  idDispositivos?: string[];
}
