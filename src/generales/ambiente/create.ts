import { IUbicacion } from '../../auxiliares';

export interface ICreateAmbiente {
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente?: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
}
