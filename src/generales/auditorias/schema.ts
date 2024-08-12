import { TipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "../dispositivo/conectividad";

export type TipoAction = "ADD" | "UPDATE" | "DELETE";

export interface IAuditoria {
  _id: string;
  fechaCreacion: string;
  action: TipoAction;

  deveui: string;
  deviceName: string;
  appkey: string;
  conectividad: TipoConectividad;
  deviceProfileID?: string;
  tipo?: TipoDispositivo;

  // Info de comunicacion
  // snr?: number;
  // rssi?: number;
  // adr?: boolean;
  // dr?: number;
  firmware?: string;
  // ubicacion?: ICoordenadas | null;

  idUser: string;
  idCliente: string;
  idEstablecimiento?: string;
  idTipoDispositivo: string;
  idLoteDispositivo?: string;
  idLoraServer?: string;
}

type OmitirCreate = "_id" | "fechaCreacion";

export interface ICreateAuditoria extends Omit<Partial<IAuditoria>, OmitirCreate> { }