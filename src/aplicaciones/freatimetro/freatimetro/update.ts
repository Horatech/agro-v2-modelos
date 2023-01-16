import { IUbicacionV2 } from '../../../auxiliares';
import { IAlerta, IReporte, Semaforo } from '../../../generales';

export interface IUpdateFreatimetro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  modelo?: string;
  descripcion?: string;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  ubicacion?: IUbicacionV2;
  offset?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
