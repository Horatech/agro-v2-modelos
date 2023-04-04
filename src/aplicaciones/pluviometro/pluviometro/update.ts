import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionPluviometro,
  IAlerta,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface IUpdatePluviometro {
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
