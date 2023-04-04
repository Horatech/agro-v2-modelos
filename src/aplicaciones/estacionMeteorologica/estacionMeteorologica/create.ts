import {
  ConfiguracionEstacionMeteorologica,
  IAlerta,
  IReporte,
  IUbicacionV2,
} from "../../..";

export interface ICreateEstacionMeteorologica {
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
