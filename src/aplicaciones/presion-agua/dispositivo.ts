import { Semaforo } from "../../generales";

export interface IDispositivoPresionAgua {
  alertaMayorA?: number | null; // entra en alerta si la presion reportada es mayor (en kpa)
  alertaMenorA?: number | null; // entra en alerta si la presion reportada es menor (en kpa)
  colores?: {
    default?: string | null; // Color si no se configura nada
    error?: string | null; // Color si el dispositivo tiene un error (sin comunicacion / bateria baja / alerta)
    nivel?: Semaforo[] | null; // Colores personalizados para los niveles de presion
  };
}
