import {
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  IReporte,
  Semaforo,
} from '../../../generales';

export interface ILamina {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del SLA
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: {
    colorIcono: string | null;
    coloresNivel: Semaforo[] | null;
  };
  cota?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
}
