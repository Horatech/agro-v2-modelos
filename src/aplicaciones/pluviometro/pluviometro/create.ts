import {
  ConfiguracionPluviometro,
  IAlerta,
  IReporte,
  IUbicacionV2,
  Semaforo,
} from "../../..";

export interface ICreatePluviometro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionPluviometro;
  radioInfluencia?: number;
  ubicacion?: IUbicacionV2 | null;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
