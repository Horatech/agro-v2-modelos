import { IUbicacion } from "../../compartidos/ubicacion";

export interface IUpdateLote {
  nombre?: string;
  ubicacion?: IUbicacion;
  idEstablecimiento?: string;
}
