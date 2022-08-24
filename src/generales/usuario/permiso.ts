import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";

export type NivelPermiso = "Admin" | "Cliente" | "Establecimiento";
export const NIVELES_PERMISO: NivelPermiso[] = [
  "Admin",
  "Cliente",
  "Establecimiento",
];

export type Rol = "Admin" | "Lectura" | "Escritura" | "Dueño" | "Tecnico";
export const ROLES: Rol[] = [
  "Admin",
  "Lectura",
  "Escritura",
  "Dueño",
  "Tecnico",
];

export interface IPermiso {
  nivel: NivelPermiso;
  rol: Rol;
  idCliente?: string;
  idEstablecimiento?: string;
  // Populate
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
}
