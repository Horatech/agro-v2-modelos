export type AlertaBin = 'Error de lectura de sensor' | 'Error de config';
export interface IAlertaBin {
  fecha: string;
  alerta?: AlertaBin;
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
}
