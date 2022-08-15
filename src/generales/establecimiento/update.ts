import { IUbicacion } from "../../auxiliares";

export interface IUpdateEstablecimiento {
  nombre?: string;
  ubicacion?: IUbicacion[];
}
