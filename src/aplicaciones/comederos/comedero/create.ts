import { ConfiguracionComederos } from "../../../generales";

export interface ICreateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  cicloAlimentacion?: {
    comienzo: string;
    final: string;
  };
  //
  nombre: string;
  idDispositivos?: string[];
}
