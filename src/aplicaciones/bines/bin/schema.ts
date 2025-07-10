import { ICoordenadas } from "../../../auxiliares";
import {
  ConfiguracionBin,
  IAlerta,
  ICliente,
  IDispositivo,
  ILote,
  IReporte,
  IEstablecimiento,
} from "../../../generales";
import { IEstadoBin } from "../historial";

export interface IContenidoBin {
  tipo:
    | "fertilizante"
    | "residuo"
    | "semilla"
    | "agroquimico"
    | "combustible"
    | "productoCosechado"
    | "otro";
  descripcion?: string;
  fechaIngreso: Date;
}

export interface IBin {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del Bin
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionBin;
  contenido?: IContenidoBin;
  estadoActual?: IEstadoBin;
  capacidadTotal?: number; // en kg o litros
  unidadMedida?: "kg" | "l" | "unidad";
  // Polyline
  ubicacion?: ICoordenadas;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
}
