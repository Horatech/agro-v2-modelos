export interface IReporteLuminariaWellness {
  dimmingValue?: number; // %
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  voltage?: number; // V
  current?: number; // A
  activePower?: number; // W - instantanea
  reactivePower?: number; // W - instantanea
  activePowerTotal?: number; // Wh - acumulada
  reactivePowerTotal?: number; // Wh - acumulada
  temperature?: number; // Grados Celsius
  lumenes?: number; // Lux
}
