import { ICoordenadas } from "../../../auxiliares";
import {
  ConfiguracionCisterna,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  Semaforo,
} from "../../../generales";

export interface ICisterna {
  // Pozo
  // Cisterna sin nivel y una bomba
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: ConfiguracionCisterna;
  // Info
  tipo?: "Cisterna" | "Pozo";
  nombre?: string;
  direccion?: string;
  localidad?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
  // Estado
  estado?: "Encendida" | "Apagada" | "Sin Información";
  condicion?: "Con Fallos" | "Sin Alertas" | "Sin Información";
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
