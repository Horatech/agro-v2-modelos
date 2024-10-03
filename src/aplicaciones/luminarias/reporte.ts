export type IModoLuminaria =
  | "Indeterminado"
  | "Fotocélula"
  | "Calendario"
  | "Manual";

export interface IReporteLuminaria {
  encendida?: boolean;
  dimmer?: number;
  consumo?: number;
  modo?: IModoLuminaria;
  ldr?: number;
}
