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
  gpsActivo?: boolean;
  location?: ICoordenadas;
  mode?: IModoLuminaria;
  activePower?: number; // kWh - lo que reporta
  reactivePower?: number; // kWh - lo que reporta
  activePowerTotal?: number; // kWh - acumulada
  reactivePowerTotal?: number; // kWh - acumulada
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  alarma?: string;
  // FRECUENCIA DE REPORTE
  intervalGeneral?: number; // Minutos
  intervalEnergy?: number; // Minutos
  // MARGENES DE ALARMA
  voltageHighLimit?: number; // V
  voltageLowLimit?: number; // V
  currentHighLimit?: number; // A
  currentLowLimit?: number; // A
  // MODO CALENDARIO (estrategias)
  modoCalendarioActivo?: boolean;
  estrategia1: ISetEstrategiaCalendarioLuminaria;
  estrategia2: ISetEstrategiaCalendarioLuminaria;
  estrategia3: ISetEstrategiaCalendarioLuminaria;
  // MODO GPS

  modoGPSActivo?: boolean;
  offsetAmanecer?: number; // Minutos
  offsetAtardecer?: number; // Minutos
  // MODO LDR
  modoLDRActivo?: boolean;
  delayLDR?: number; // Segundos
  valorEncendido?: number; // Lux
  valorApagado?: number; // Lux
  fechaUltimoValorLDR?: string;
  ultimoValorLDR?: number; // Lux
}
