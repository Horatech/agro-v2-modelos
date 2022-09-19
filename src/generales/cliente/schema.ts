import { TipoDispositivo } from "../tipoDispositivo";

export interface ICliente {
  _id: string;
  activo: boolean;
  fechaCreacion: string;
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
}
