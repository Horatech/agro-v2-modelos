export interface IDispositivoLuminariaHoratech {
  //Datos de configuración (llegan al inicio del firmware o por pedido de downlink)
  limLuzInferior?: number;
  limLuzSuperior?: number;
  offsetGPSAmanecer?: number;
  offsetGPSAtardecer?: number;
  timeZone?: number;
  frecReporte?: number;
  dataRate?: number;

  //Datos de estado (llegan cada 10 minutos)
  mode?: IModoLuminaria;
  estadoRele?: boolean;
  dimmerHabilitado?: boolean;
  energiaExterna?: boolean;
  adrHabilitado?: boolean;
  alarma?: string;

  //Datos de consumo (llegan cada 1 hora)
  corriente?: number; //mA
  voltaje?: number; //V
  potencia?: number; //W
  energia?: number; //kWh
  energiaTotal?: number; //kWh
  factorPotencia?: number;

  //Configuración modo calendario
  configCalendario?: IDimmerCalendarioConfig;
}

export type IModoLuminaria =
  | "Indeterminado"
  | "Fotocélula"
  | "Calendario"
  | "Manual"
  | "GPS";

export interface IDimmerCalendarioConfig {
  calendarioHabilitado: boolean;
  puntos: IPuntoDimmer[];
  porcentajeDefecto: number;
}

export interface IPuntoDimmer {
  hora: string;
  porcentaje: number;
  activo: boolean;
}

export interface IConfigDispositivoLuminariaHoratech {
  //Config byte
  mode?: IModoLuminaria;
  estadoRele?: boolean;
  dimmerHabilitado?: boolean;
  energiaExterna?: boolean;
  adrHabilitado?: boolean;

  //Otros
  limLuzInferior?: number;
  limLuzSuperior?: number;
  offsetGPSAmanecer?: number;
  offsetGPSAtardecer?: number;
  timeZone?: number;
  frecReporte?: number;
  dataRate?: number;
}
