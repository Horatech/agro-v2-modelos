import { IUbicacion } from '../../auxiliares';

export interface IUpdateEstablecimiento {
  nombre?: string;
  ubicacion?: IUbicacion[];
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
}
