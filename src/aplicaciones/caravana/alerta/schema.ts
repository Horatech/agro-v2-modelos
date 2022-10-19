export type TipoAlertaCaravana =
  | "Animal fuera del lote"
  | "Animal fuera del establecimiento"
  | "Caida libre"
  | "Sin movimiento"
  | "Error de GPS"
  | "Movimiento brusco"
  | "Desplazamiento rápido";

export interface IAlertaCaravana {
  fecha: string;
  idAnimal?: string;
  alerta?: TipoAlertaCaravana;
}
