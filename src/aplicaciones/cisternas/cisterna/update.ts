import { ICoordenadas } from "../../../auxiliares";
import { ConfiguracionCisterna } from "../../../generales";

export interface IUpdateCisterna {
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
  deveuisBomba?: string[];
  deveuisNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
  // Estado
  estado?: "Encendida" | "Apagada" | "Sin Información";
  condicion?: "Con Fallos" | "Sin Alertas" | "Sin Información";
}
