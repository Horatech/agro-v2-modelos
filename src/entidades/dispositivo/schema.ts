import { ICliente } from "../cliente";
import { ILoraServer } from "../loraServer";
import { TipoDispositivo } from "../tipoDispositivo/tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IDispositivo {
  _id: string;
  fechaCreacion: string;
  idCliente: string;
  deveui: string;
  deviceName: string;
  snr?: number;
  rssi?: number;
  fechaUltimaComunicacion?: string;
  appkey: string;
  idLote: string;
  tipoDispositivo: TipoDispositivo;
  conectividad: TipoConectividad;
  /**
   * Solo con conectividad Lora
   */
  idLoraServer?: string;
  // Virtuals
  cliente?: ICliente;
  loraServer?: ILoraServer;
}
