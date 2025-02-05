import { IModoLuminaria } from "./reporte";

export type ModoForzado =
  | "No Forzado"
  | "Forzado Encendido"
  | "Forzado Apagado";

export interface IReporteLuminariaWellness {
  dimmingValue?: number; // %
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  voltage?: number; // V
  current?: number; // A
  activePower?: number; // kwH - acumulada, se resetea cuando el nodo se reinicia
  reactivePower?: number; // kwH - acumulada, se resetea cuando el nodo se reinicia
  activePowerTotal?: number; // kWh - acumulada
  reactivePowerTotal?: number; // kWh - acumulada
  temperature?: number; // Grados Celsius
  lumenes?: number; // Lux
  modo?: IModoLuminaria;
  modoForzado?: ModoForzado;
}
