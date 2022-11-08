import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { TipoDispositivo } from "../tipoDispositivo";

export interface ILogUplink {
  _id: string;
  fechaCreacion?: string;
  deveui: string;
  deviceName?: string;
  puerto?: number;
  payload?: string;
  adr?: boolean;
  dr?: number;
  fCnt?: string;
  rssi?: number;
  snr?: number;
  timestamp?: string;
  tipoDispositivo?: TipoDispositivo;
  idCliente?: string;
  idEstablecimiento?: string;
  //
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
