import { Color } from '../../../generales';

export interface IUpdateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Color[] };
  //
  nombre?: string;
  idDispositivos?: string[];
}
