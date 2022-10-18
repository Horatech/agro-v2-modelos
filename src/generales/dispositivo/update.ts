import { ICoordenadas } from "../../auxiliares";
import { IAlerta } from "../alerta";
import { IReporte } from "../reporte";
import { TipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IUpdateDispositivo {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Info de carga
  deveui?: string;
  deviceName?: string;
  appkey?: string;
  conectividad?: TipoConectividad;
  idTipoDispositivo?: string;
  idLoteDispositivo?: string;
  idLoraServer?: string;
  deviceProfileID?: string;
  tipo?: TipoDispositivo;
  // Info de comunicacion
  snr?: number;
  rssi?: number;
  adr?: boolean;
  dr?: number;
  fechaUltimaComunicacion?: string;
  // Otra info
  ubicacion?: ICoordenadas;
  firmware?: string;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
}
