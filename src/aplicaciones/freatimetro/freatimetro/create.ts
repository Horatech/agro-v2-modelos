import {
  ConfiguracionFreatimetro,
  IAlerta,
  IReporte,
  IUbicacionV2,
  Semaforo,
} from "../../..";

export interface ICreateFreatimetro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionFreatimetro;
  ubicacion?: IUbicacionV2 | null;
  offset?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
