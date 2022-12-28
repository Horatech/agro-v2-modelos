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
  establecimientos?: { colorLinea: string; colorRelleno: string };
  lotes?: { colorLinea: string; colorRelleno: string };
  animales?: {
    colorDentro: string;
    colorFueraLote: string;
    colorFueraEst: string;
    colorError: string;
  };
  canal?: { colorIcono: string; coloresNivel: string[] };
  comederos?: { colorIcono: string; coloresNivel: string[] };
  cisterna?: { colorIcono: string; coloresNivel: Semaforo[] };
  sla?: { colorIcono: string; coloresNivel: Semaforo[] };
  bombeo?: { colorIcono: string; colorIconoAlerta: string };
}

export interface Semaforo {
  valorDesde: number;
  valorHasta: number;
  color: string;
  etiqueta?: string;
}
