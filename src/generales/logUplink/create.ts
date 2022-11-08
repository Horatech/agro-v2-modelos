import { TipoDispositivo } from "../tipoDispositivo";

export interface ICreateLogUplink {
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
}
