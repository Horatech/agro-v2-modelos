export type TipoMensajeLora =
  | "up"
  | "ack"
  | "join"
  | "txack"
  | "error"
  | "status";

export const TIPOS_MENSAJE_LORA: TipoMensajeLora[] = [
  "up",
  "ack",
  "join",
  "txack",
  "error",
  "status",
];