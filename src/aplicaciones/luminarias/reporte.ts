export type IModoLuminaria =
  | "Indeterminado"
  | "Fotocélula"
  | "Calendario"
  | "Manual";

export interface IReporteLuminaria {
  dimmingValue?: number; // %
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  voltage?: number; // V
  current?: number; // A
  activePower?: number; // W
  reactivePower?: number; // W
  frequency?: number; // Hz
  temperature?: number; // Grados Celsius
}
