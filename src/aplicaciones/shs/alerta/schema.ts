export type AlertaSHS = 'Error de lectura de sensor' | 'Error de config';
export interface IAlertaSHS {
  fecha: string;
  alerta?: AlertaSHS;
}
