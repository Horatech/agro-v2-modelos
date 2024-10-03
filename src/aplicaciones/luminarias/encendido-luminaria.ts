export interface IEncendidoLuminaria {
  actual: boolean;
  consumo?: number;
  deveui: string;
  dimmer: number;
  fechaEncendido: string;
  fechaApagado?: string;
  tiempoAcumuladoEncendido?: number;
  tiempoAcumuladoApagado?: number;
}

export interface IResumenEncendidoLuminaria {
  cantLuminarias: number;
  consumo: number;
  horas: number;
  timestamp: string;
}
