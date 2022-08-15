import { TipoDispositivo } from "../tipoDispositivo/tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IUpdateDispositivo {
  idCliente?: string;
  deveui?: string;
  deviceName?: string;
  snr?: number;
  rssi?: number;
  fechaUltimaComunicacion?: string;
  appkey?: string;
  idLote?: string;
  tipoDispositivo?: TipoDispositivo;
  conectividad?: TipoConectividad;
  idLoraServer?: string;
  // Configuraciones especificas por tipo de dispositivo
  config?: Record<string, any>;
}
