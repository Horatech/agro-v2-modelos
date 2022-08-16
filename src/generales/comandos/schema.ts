import { ICliente } from "../cliente";
import { IDispositivo } from "../dispositivo";
import { IEstablecimiento } from "../establecimiento";
import { IUsuario } from "../usuario";

export interface IComando {
  // Downlink
  deveui: string;
  puerto: number;
  payload: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  //
  _id?: string;
  fechaCreacion?: string;
  //
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  fallos?: number;
  fCnt?: string;
  idUsuario?: string;
  // Virtuals
  usuario?: IUsuario;
  dispositivo?: IDispositivo;
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
