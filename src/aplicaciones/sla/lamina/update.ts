import {
  ConfiguracionLamina,
  IAlerta,
  IReporte,
  Semaforo,
} from "../../../generales";

export interface IUpdateLamina {
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionLamina;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
