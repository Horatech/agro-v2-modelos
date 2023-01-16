import { TipoDispositivo } from '../tipoDispositivo';
import { IImagenesCliente } from './imagenes';

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
  imagenes?: IImagenesCliente;
  configuraciones?: Configuraciones;
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
  canal?: { colorIcono: string | null; coloresNivel: Color[] | null };
  comederos?: { colorIcono: string | null; coloresNivel: Color[] | null };
  cisterna?: { colorIcono: string | null; coloresNivel: Semaforo[] | null };
  sla?: { colorIcono: string | null; coloresNivel: Semaforo[] | null };
  bombeo?: { colorIcono: string | null; colorIconoAlerta: string | null };
  estacionMetereologica?: {
    colorIcono: string | null;
    colorAlerta: string | null;
  };
  featrimetro?: { colorIcono: string | null; coloresNivel: Semaforo[] | null };
  pluviometro?: { colorIcono: string | null; coloresNivel: Semaforo[] | null };
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
