export type AlertaSLA = 'Error de lectura de sensor' | 'Error de config';
export interface IAlertaSLA {
  fecha: string;
  alerta?: AlertaSLA;
}
