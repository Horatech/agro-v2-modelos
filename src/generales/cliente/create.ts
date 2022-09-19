import { TipoDispositivo } from "../tipoDispositivo";

export interface ICreateCliente {
  nombre: string;
  tiposDispositivo: TipoDispositivo[];
}
