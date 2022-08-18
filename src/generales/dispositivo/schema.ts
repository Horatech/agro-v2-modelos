import { ICoordenadas } from "../../auxiliares";
import { IAlerta } from "../alerta";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ILoraServer } from "../loraServer";
import { ILoteDispositivo } from "../loteDispositivo";
import { IReporte } from "../reporte";
import { ITipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IDispositivo {
  // Info autogenerada
  _id: string;
  fechaCreacion: string;
  // Tentant
  idCliente: string;
  idEstablecimiento?: string;
  // Info de carga
  deveui: string;
  deviceName: string;
  appkey: string;
  conectividad: TipoConectividad;
  idTipoDispositivo: string;
  idLote?: string;
  idLoraServer?: string;
  // Info de comunicacion
  snr?: number;
  rssi?: number;
  adr?: boolean;
  dr?: number;
  fechaUltimaComunicacion?: string;
  // Otra info
  ubicacion?: ICoordenadas;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILoteDispositivo;
  tipoDispositivo2?: ITipoDispositivo;
  loraServer?: ILoraServer;
}
