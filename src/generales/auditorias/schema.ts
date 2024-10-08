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
  firmware?: string;

  idUsuario: string;
  idCliente: string;
  idTipoDispositivo: string;
  idLoteDispositivo?: string;
  idLoraServer?: string;
  // Virtuals
  usuario: IUsuario;
  cliente?: ICliente;
  tipoDispositivo?: ITipoDispositivo;
  loteDispositivo?: ILoteDispositivo;
  loraServer?: ILoraServer;
}

type OmitirCreate = "_id" | "fechaCreacion" | "usuario" | "cliente" | "tipoDispositivo" | "loteDispositivo" | "loraServer";

export interface ICreateAuditoria extends Omit<Partial<IAuditoria>, OmitirCreate> { }