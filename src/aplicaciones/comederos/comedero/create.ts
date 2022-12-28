import { Color } from '../../../generales';

export interface ICreateComedero {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Color[] };
  //
  nombre: string;
  idDispositivos?: string[];
}
