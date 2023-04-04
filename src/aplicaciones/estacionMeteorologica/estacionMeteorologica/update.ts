import { IUbicacionV2 } from "../../../auxiliares";
import {
  ConfiguracionEstacionMeteorologica,
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
  configuraciones?: ConfiguracionEstacionMeteorologica;
  radioInfluencia?: number | null;

  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
