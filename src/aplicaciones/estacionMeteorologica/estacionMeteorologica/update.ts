import { IUbicacionV2 } from "../../../auxiliares";
import { IAlerta, IReporte } from "../../../generales";

export interface IUpdateEstacionMeteorologica {
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  idDispositivo?: string;
  nombre?: string;
  descripcion?: string;
  modelo?: string;
  ubicacion?: IUbicacionV2;

  //
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
