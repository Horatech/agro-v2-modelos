import {
  ConfiguracionHumedadSuelo,
  IAlerta,
  IReporte,
  IUbicacionV2,
  Semaforo,
} from "../../..";

import {
  IAmbiente
} from '../../../generales';

export interface ICreateSensorHumedadSuelo {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionHumedadSuelo;
  ubicacion?: IUbicacionV2 | null;
  // profundidad en CM.
  profundidad?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
