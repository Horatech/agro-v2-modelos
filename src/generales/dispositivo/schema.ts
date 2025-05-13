import { ICoordenadas } from "../../auxiliares";
import { IAlerta } from "../alerta";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ILoraServer } from "../loraServer";
import { ILoteDispositivo } from "../loteDispositivo";
import { IReporte } from "../reporte";
import { ITipoDispositivo, TipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IDispositivo {
  // Nombre útil para cada aplicación
  nombre?: string;
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
  puertoUltimoUplink?: number;
  // Otra info
  firmware?: string;
  ubicacion?: ICoordenadas | null;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  tipoDispositivo?: ITipoDispositivo;
  loteDispositivo?: ILoteDispositivo;
  loraServer?: ILoraServer;
}

export interface IDispositivoWithRegistros extends IDispositivo {
  ultimosRegistros?: { bombas: Array<{ i: IReporte }> };
}
