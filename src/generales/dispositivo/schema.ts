import { ICliente } from "../cliente";
import { ILoraServer } from "../loraServer";
import { TipoDispositivo } from "../tipoDispositivo/tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IDispositivo {
  // Info autogenerada
  _id: string;
  fechaCreacion: string;
  // Info de carga
  idCliente: string;
  deveui: string;
  deviceName: string;
  appkey: string;
  idLote: string;
  tipoDispositivo: TipoDispositivo;
  conectividad: TipoConectividad;
  idLoraServer?: string;
  // Info de comunicacion
  snr?: number;
  rssi?: number;
  adr?: boolean;
  dr?: number;
  fechaUltimaComunicacion?: string;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  // Virtuals
  cliente?: ICliente;
  loraServer?: ILoraServer;
}
