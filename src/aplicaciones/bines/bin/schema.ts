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
  dispositivoBin?: IDispositivo;
}
