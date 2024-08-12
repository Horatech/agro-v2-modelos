import { ITipoDispositivo, TipoDispositivo } from "../tipoDispositivo";
import { TipoConectividad } from "../dispositivo/conectividad";
import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";
import { ILoteDispositivo } from "../loteDispositivo";
import { ILoraServer } from "../loraServer";
import { IUsuario } from "../usuario";

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

  idUsuario: string;
  idCliente: string;
  idEstablecimiento?: string;
  idTipoDispositivo: string;
  idLoteDispositivo?: string;
  idLoraServer?: string;
  // Virtuals
  usuario: IUsuario;
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  tipoDispositivo?: ITipoDispositivo;
  loteDispositivo?: ILoteDispositivo;
  loraServer?: ILoraServer;
}

type OmitirCreate = "_id" | "fechaCreacion";

export interface ICreateAuditoria extends Omit<Partial<IAuditoria>, OmitirCreate> { }