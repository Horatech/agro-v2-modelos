import { ICisterna } from "../aplicaciones";
import { ICliente } from "./cliente";
import { IDispositivo } from "./dispositivo";
import { IEstablecimiento } from "./establecimiento";
import { TipoDispositivo } from "./tipoDispositivo";
import { IUsuario } from "./usuario";

export interface CondicionNotificacion {
  "Nivel de Cisterna"?: {
    "Valor inferior a"?: number;
    "Valor superior a"?: number;
  };
  "Estacion de Bombeo"?: {
    Encendida?: boolean;
    Apagada?: boolean;
  };
}

export type TipoEnvio = "SMS" | "WhatsApp" | "Llamada" | "Notificacion Push";

export type Agrupacion = "Global" | "Establecimiento" | "Entidad";

export interface IConfigNotificacion {
  _id?: string;
  // Tipo de envio de la notificacion
  tipoEnvio?: TipoEnvio;
  // Tipo de dispositivo
  tipoDispositivo?: TipoDispositivo;
  // Configuracion de la condicion para enviar la notificacion
  condicion?: CondicionNotificacion;
  // Agrupacion para buscar las entidades
  agrupacion?: Agrupacion;
  // Sobre que entidades se reciben las notificaciones
  idCliente?: string;
  idEstablecimiento?: string;
  idEntidad?: string;
  // Los usuarios que van a recibir las notificaciones
  idsUsuarios?: string[];

  // Virtual
  usuarios?: IUsuario[];
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  // Entidades
  cisterna?: ICisterna;
  dispositivo?: IDispositivo;
}

////// CREATE
type OmitirCreate = "_id" | "cliente" | "establecimiento" | "cisterna";
export interface ICreateConfigNotificacion
  extends Omit<Partial<IConfigNotificacion>, OmitirCreate> {}

////// UPDATE
type OmitirUpdate = "_id" | "cliente" | "establecimiento" | "cisterna";
export interface IUpdateConfigNotificacion
  extends Omit<Partial<IConfigNotificacion>, OmitirUpdate> {}
