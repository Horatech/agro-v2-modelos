import { TipoDispositivo } from "../tipoDispositivo";

export interface IUpdateCliente {
  activo?: boolean;
  nombre?: string;
  tiposDispositivo: TipoDispositivo[];
}
