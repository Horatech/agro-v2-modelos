import { IUbicacion } from '../../auxiliares';

export interface IUpdateZona {
  nombre?: string;
  ubicacion?: IUbicacion;
  idEstablecimiento?: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
}
