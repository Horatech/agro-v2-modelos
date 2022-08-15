import { IDownlink } from "../../mensajesLora";

export interface ICreateComando extends IDownlink {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  fechaCreacion?: string;
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  fallos?: number;
  fCnt: string;
  idUsuario?: string;
}
