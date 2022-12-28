import { IUbicacion } from '../../auxiliares';

export interface ICreateLote {
  nombre: string;
  ubicacion?: IUbicacion;
  idEstablecimiento: string;
  idCliente?: string;
  configuraciones?: { colorLinea: string; colorRelleno: string };
}
