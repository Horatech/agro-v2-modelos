import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionHumedadSuelo,
  IAlerta,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface IUpdateSensorHumedadSuelo {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionHumedadSuelo;
  ubicacion?: IUbicacionV2 | null;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
