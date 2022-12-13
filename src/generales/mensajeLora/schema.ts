import { TipoMensajeLora } from "./tipoMensajeLora";

export interface IMensajeLora {
  // atributos generales
  _id?: string;
  fechaCreacion?: string;
  deveui?: string;
  applicationId?: string;
  applicationName?: string;
  deviceName?: string;
  timestamp?: string;
  gatewayId?: string;
  // tipo de mensaje
  tipo?: TipoMensajeLora;
  // atributos de mensaje up
  fcnt?: number; // para up y para ack
  port?: number;
  payload?: string;
  adr?: boolean;
  dr?: number;
  channel: number;
  rssi?: number;
  snr?: number;
  confirmedUplink?: boolean;
  // atributos de mensaje ack
  ackReceived?: boolean;
  // atributos de mensaje join (nada)
  // atributos de mensaje txack (nada)
  // atributos de mensaje error
  type?: string;
  error?: string;
  // atributos de mensaje status
  margin?: number;
  externalPowerSource?: boolean;
  batteryLevel?: number;
  batteryLevelUnavailable?: boolean;
}