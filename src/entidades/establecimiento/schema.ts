import { IUbicacion } from "../../compartidos/ubicacion";
import { ICliente } from "../cliente";

export interface IEstablecimiento {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente: string;
  fechaCreacion: string;
  // Populate
  cliente?: ICliente;
}
