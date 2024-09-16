import { ConfiguracionComederos } from "../../../generales";

export interface ICreateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionComederos;
  cicloAlimentacion?: {
    comienzo: String;
    final: String;
  };
  //
  nombre: string;
  idDispositivos?: string[];
}
