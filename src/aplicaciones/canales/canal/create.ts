import { Color, IPolyline } from '../../..';

export interface ICreateCanal {
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
}
