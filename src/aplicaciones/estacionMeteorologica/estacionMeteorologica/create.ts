import { IAlerta, IReporte, IUbicacionV2 } from "../../..";

export interface ICreateEstacionMeteorologica {
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
