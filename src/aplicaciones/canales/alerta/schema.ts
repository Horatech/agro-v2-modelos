export type AlertaCanal =
  | "Error de lectura de sensor"
  | "Error de config"
  | "Configuracion de Colores";
export interface IAlertaCanal {
  fecha: string;
  alerta?: AlertaCanal;
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
}
