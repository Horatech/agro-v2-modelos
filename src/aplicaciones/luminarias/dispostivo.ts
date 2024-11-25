import { ICoordenadas } from "../../auxiliares";
import { IModoLuminaria } from "./reporte";

export interface IDispositivoLuminaria {
  deviceWorkingTime?: number; // Minutos
  restartTimes?: number; // Veces
  location?: ICoordenadas;
  mode?: IModoLuminaria;
  intervalGeneral?: number; // Minutos
  intervalEnergy?: number; // Minutos
}
