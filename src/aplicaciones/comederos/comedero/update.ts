import { Color } from '../../../generales';

export interface IUpdateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string | null; coloresNivel: Color[] | null };
  //
  nombre?: string;
  idDispositivos?: string[];
}
