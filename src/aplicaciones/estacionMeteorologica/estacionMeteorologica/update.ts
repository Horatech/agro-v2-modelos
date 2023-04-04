import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionEstacionMetereologica,
  IAlerta,
  IReporte,
} from "../../../generales";

export interface IUpdateEstacionMeteorologica {
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  modelo?: string;
  ubicacion?: IUbicacionV2 | null;
  configuraciones?: ConfiguracionEstacionMetereologica;
  radioInfluencia?: number | null;

  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
