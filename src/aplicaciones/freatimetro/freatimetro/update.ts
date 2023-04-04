import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionFreatimetro,
  IAlerta,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface IUpdateFreatimetro {
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
