import { ICoordenadas } from "../../../auxiliares";
import {
  ConfiguracionCisterna,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
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
  // Datos fisicos
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
  // Automatizacion y Dispositivos
  automatizada?: boolean;
  nivelEncendido?: number;
  nivelApagado?: number;

  idsNivel?: string[];
  deveuisNivel?: string[];

  idsBomba?: string[];
  deveuisBomba?: string[];
  grupo1Activo?: boolean;
  horasEncendidoGrupo1?: number;

  idsBomba2?: string[];
  deveuisBomba2?: string[];
  grupo2Activo?: boolean;
  horasEncendidoGrupo2?: number;

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
