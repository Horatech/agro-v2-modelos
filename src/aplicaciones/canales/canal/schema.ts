import { IPolyline } from '../../../auxiliares';
import {
  Color,
  IAlerta,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  IReporte,
} from '../../../generales';

export interface ICanal {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del canal
  deveuiSensorCanal?: string;
  // Algo de lo de bombeo
  deveuiEstacionBombeo?: string;
  numeroDeCanal?: number;
  tipoDeCanal?: 'Entrada' | 'Salida';
  nombre?: string;
  descripcion?: string;
  configuraciones?: { colorIcono: string | null; coloresNivel: Color[] | null };
  // Polyline
  ubicacion?: IPolyline;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  // Uno por cada deveui
  dispositivoBombeo?: IDispositivo;
  dispositivoCanal?: IDispositivo;
}
