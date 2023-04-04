import { ConfiguracionTracker, IAlerta, IReporte } from "../../../generales";

export interface IUpdateTracker {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  configuraciones?: ConfiguracionTracker;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
