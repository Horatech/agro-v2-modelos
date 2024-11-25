import { ICoordenadas } from "../../auxiliares";
import { IModoLuminaria } from "./reporte";

export interface IDispositivoLuminaria {
  deviceWorkingTime?: number; // Minutos
  restartTimes?: number; // Veces
  location?: ICoordenadas;
  mode?: IModoLuminaria;
  intervalGeneral?: number; // Minutos
  intervalEnergy?: number; // Minutos
  voltageHighLimit?: number; // V
  voltageLowLimit?: number; // V
  currentHighLimit?: number; // A
  currentLowLimit?: number; // A
}
