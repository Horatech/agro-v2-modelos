export type IModoLuminaria =
  | "Indeterminado"
  | "Fotocélula"
  | "Calendario"
  | "Manual";

export interface IReporteLuminaria {
  dimmingValue?: number;
  turnOnOffStatus?: boolean;
  voltage?: number;
  current?: number;
  activePower?: number;
  reactivePower?: number;
  frequency?: number;
  temperature?: number;
}
