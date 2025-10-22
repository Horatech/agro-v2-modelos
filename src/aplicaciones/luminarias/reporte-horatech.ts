import { IModoLuminaria } from "./dispositivo-horatech";

export interface IReporteLuminariaHoratech {
  tipo?: "Estado";
  turnOnOffStatus?: boolean; // True: Encendido, False: Apagado
  modo?: IModoLuminaria;
  estadoRele?: boolean;
  dimmerHabilitado?: boolean;
  energiaExterna?: boolean;
  potencia?: number;
  voltaje?: number;
  dimmingValue?: number;
  fCnt?: number;
  alarmas?: string[]; // Lista de alarmas activas en el momento del reporte (puede venir vacia)
  //
  esDeDia?: boolean; // Indica si el reporte es de día o de noche
  horaAmanecer?: string; // Hora de amanecer del día del reporte
  horaAtardecer?: string; // Hora de atardecer del día del reporte
  tiempoEncendida?: number; // Horas de uso acumuladas hasta el momento del reporte
}
export interface IReporteLuminariaHoratechEnergia {
  tipo?: "Energia";
  corriente?: number; // mA
  voltaje?: number; // V
  potencia?: number; // W
  energia?: number; // kWh
  energiaTotal?: number; //kWh acumulado
  factorPotencia?: number; //factor de potencia de la luminaria (dividido por 100)
  fCnt?: number;
  //
  esDeDia?: boolean; // Indica si el reporte es de día o de noche
  horaAmanecer?: string; // Hora de amanecer del día del reporte
  horaAtardecer?: string; // Hora de atardecer del día del reporte
}
