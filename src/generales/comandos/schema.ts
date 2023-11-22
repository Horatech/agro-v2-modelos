import { ICliente } from "../cliente";
import { IDispositivo } from "../dispositivo";
import { IEstablecimiento } from "../establecimiento";
import { TipoDispositivo } from "../tipoDispositivo";
import { IUsuario } from "../usuario";

export type IEstadoComando =
  | "Enviado"
  | "Recibido"
  | "Ejecutado"
  | "No Ejecutado";

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
  estado?: IEstadoComando;
  fallos?: number;
  fCnt?: string;
  idUsuario?: string;
  tipoDispositivo?: TipoDispositivo;
  nombre?: string;
  descripcion?: string;
  // Virtuals
  usuario?: IUsuario;
  dispositivo?: IDispositivo;
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
