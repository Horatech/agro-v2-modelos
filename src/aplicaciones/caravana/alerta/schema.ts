export interface IAlertaCaravana {
  fecha: string;
  alerta?:
    | "Animal fuera del lote"
    | "Animal fuera del establecimiento"
    | "Caida libre"
    | "Sin movimiento"
    | "Error de GPS"
    | "Movimiento Brusco"
    | "Desplazamiento rápido";
}
