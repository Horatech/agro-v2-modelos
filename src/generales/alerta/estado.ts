import { IUsuario } from "../usuario";

export type EstadoAlerta = "Nueva" | "Finalizada";
export const ESTADOS_ALERTA = ["Nueva", "Finalizada"];

export interface IEstadoAlerta {
  fecha?: string;
  idUsuario?: string;
  estado?: EstadoAlerta;
  comentario?: string;
  // Virtual
  usuario?: IUsuario;
}
