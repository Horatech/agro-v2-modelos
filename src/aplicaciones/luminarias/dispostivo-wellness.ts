import { ICoordenadas } from "../../auxiliares";
import { IModoLuminaria } from "./reporte";

export interface IDispositivoLuminariaWellness {
  location?: ICoordenadas;
  mode?: IModoLuminaria;
  activePower?: number; // kWh - lo que reporta
  reactivePower?: number; // kWh - lo que reporta
  activePowerTotal?: number; // kWh - acumulada
  reactivePowerTotal?: number; // kWh - acumulada
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  alarma?: string;
  // MARGENES DE ALARMA
  voltageHighLimit?: number; // V
  voltageLowLimit?: number; // V
  currentHighLimit?: number; // A
  currentLowLimit?: number; // A
  // MODO GPS
  offsetAmanecer?: number; // Minutos
  offsetAtardecer?: number; // Minutos
  // MODO LDR
  valorEncendido?: number; // Lux
  valorApagado?: number; // Lux
  fechaUltimoValorLDR?: string;
  ultimoValorLDR?: number; // Lux
}
