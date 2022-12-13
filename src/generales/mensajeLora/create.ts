import { TipoMensajeLora } from "./tipoMensajeLora";

export interface ICreateMensajeLora {
  deveui: string;
  applicationId?: string;
  applicationName?: string;
  deviceName?: string;
  timestamp?: string;
  gatewayId?: string;
  tipo?: TipoMensajeLora;
  fcnt?: number;
  port?: number;
  payload?: string;
  adr?: boolean;
  dr?: number;
  channel: number;
  rssi?: number;
  snr?: number;
  confirmedUplink?: boolean;
  ackReceived?: boolean;
  type?: string;
  error?: string;
  margin?: number;
  externalPowerSource?: boolean;
  batteryLevel?: number;
  batteryLevelUnavailable?: boolean;
}