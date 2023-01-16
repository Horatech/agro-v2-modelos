import { IAlerta, IReporte, Semaforo } from '../../..';

export interface ICreateLamina {
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
