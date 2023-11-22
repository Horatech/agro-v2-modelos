import { IEstadoComando } from "./schema";

export interface IUpdateComando {
  fechaActualizacion?: string;
  ejecutado?: boolean;
  error?: boolean;
  estado?: IEstadoComando;
  fallos?: number;
  fCnt?: string;
  nombre?: string;
  descripcion?: string;
}
