import { IEstadoComando, TipoDispositivo } from "../..";

export interface ICreateComando {
  // Downlink
  deveui: string;
  puerto: number;
  payload: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  fechaCreacion?: string;
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  estado?: IEstadoComando;
  fallos?: number;
  fCnt?: string;
  idUsuario?: string;
  tipoDispositivo?: TipoDispositivo;
  nombre?: string;
  descripcion?: string;
}
