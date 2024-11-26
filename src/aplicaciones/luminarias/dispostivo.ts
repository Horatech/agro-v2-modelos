import { ICoordenadas } from "../../auxiliares";
import { IModoLuminaria } from "./reporte";

export interface ISetMargenesAlarmaLuminaria {
  voltageHighLimit?: number; // V
  voltageLowLimit?: number; // V
  currentHighLimit?: number; // A
  currentLowLimit?: number; // A
}

export interface ISetEstrategiaCalendarioLuminaria {
  numeroEstrategia?: 1 | 2 | 3;
  habilitada?: boolean;
  horaDimmer1?: string; // 'HH:mm:ss'
  dimmer1?: number; // Dimmer 0-100 // 0 = Apagado
  horaDimmer2?: string; // 'HH:mm:ss'
  dimmer2?: number; // Dimmer 0-100 // 0 = Apagado
}

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
