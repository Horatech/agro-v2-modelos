import { TipoDispositivo } from "../tipoDispositivo";
import { IImagenesCliente } from "./imagenes";
import { IIntegracion } from "./integraciones";

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
  integraciones?: IIntegracion[];
}

export interface Configuraciones {
  establecimientos?: { colorLinea: string | null; colorRelleno: string | null };
  lotes?: { colorLinea: string | null; colorRelleno: string | null };
  animales?: {
    colorDentro: string | null;
    colorFueraLote: string | null;
    colorFueraEst: string | null;
    colorError: string | null;
  };
  canal?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  comederos?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  cisterna?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  sla?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  bombeo?: { colorIcono: string | null; colorIconoAlerta: string | null };
  estacionMetereologica?: {
    colorIcono: string | null;
    colorAlerta: string | null;
  };
  featrimetro?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  pluviometro?: {
    colorIcono?: string | null;
    colorError?: string | null;
    coloresNivel?: Semaforo[] | null;
  };
  tracker?: { colorIcono: string | null };
}

export interface Semaforo {
  valorDesde: number;
  valorHasta: number;
  color: string;
  etiqueta?: string;
}

export interface Color {
  nombre: string;
  color: string;
}
