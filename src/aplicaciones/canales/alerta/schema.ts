export type AlertaCanal = 'Error de lectura de sensor' | 'Error de config';
export interface IAlertaCanal {
  fecha: string;
  alerta?: AlertaCanal;
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
}
