import { IDownlink } from "../../mensajesLora";

export interface ICreateComando extends IDownlink {
  fechaCreacion?: string;
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  fallos?: number;
  fCnt: string;
  idUsuario?: string;
}
