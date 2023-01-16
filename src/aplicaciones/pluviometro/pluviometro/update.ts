import { IUbicacionV2 } from '../../../auxiliares';
import { IAlerta, IReporte, Semaforo } from '../../../generales';

export interface IUpdatePluviometro {
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
  radioInfluencia?: number;
  ubicacion?: IUbicacionV2;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
