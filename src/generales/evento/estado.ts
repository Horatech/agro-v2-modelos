import { IUsuario } from '../usuario';

export type EstadoEvento = 'Nueva' | 'Finalizada';
export const ESTADOS_EVENTO = ['Nueva', 'Finalizada'];

export interface IEstadoEvento {
  fecha?: string;
  idUsuario?: string;
  estado?: EstadoEvento;
  comentario?: string;
  // Virtual
  usuario?: IUsuario;
}
