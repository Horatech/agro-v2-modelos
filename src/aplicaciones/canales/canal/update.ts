import { IPolyline } from '../../../auxiliares';
import { Color, IAlerta, IReporte } from '../../../generales';

export interface IUpdateCanal {
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
  ubicacion?: IPolyline[];
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
