import { IDispositivo } from "../dispositivo";
import { IDownlink } from "../downlink";
import { IUsuario } from "../usuario";

export interface IComando extends IDownlink {
  _id?: string;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  fallos?: number;
  fCnt?: string;
  idUsuario?: string;
  // Virtuals
  usuario?: IUsuario;
  dispositivo?: IDispositivo;
}
