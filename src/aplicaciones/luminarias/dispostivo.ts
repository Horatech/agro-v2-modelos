import { ICoordenadas } from "../../auxiliares";
import { IModoLuminaria } from "./reporte";

export interface IDispositivoLuminaria {
  deviceWorkingTime?: number;
  restartTimes?: number;
  location?: ICoordenadas;
  mode?: IModoLuminaria;
}
