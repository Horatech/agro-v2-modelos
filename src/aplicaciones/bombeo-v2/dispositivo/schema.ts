export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEnergia?: boolean;
  bateriaInterna?: number;
  bateriaExterna?: number;

  // Sensores de Nivel
  hayEntrada?: boolean;
  haySalida?: boolean;
  bateriaCanalEntrada?: number;
  bateriaCanalSalida?: number;
  nivelCanalEntrada?: number;
  nivelCanalSalida?: number;
  tiempoSinReportarEntrada?: number;
  tiempoSinReportarSalida?: number;
  valoresPorNivelEntrada?: {
    [numero: number]: boolean;
  };
  valoresPorNivelSalida?: {
    [numero: number]: boolean;
  };

  // Arrancadores
  cantidadNiveles?: number;
  arrancadoresHabilitados?: {
    [numero: number]: boolean;
  };
  tipoArrancadores?: {
    [numero: number]: boolean;
  };
  estadoArrancadores?: {
    [numero: number]: boolean;
  };
  prioridadArrancadores?: {
    [numero: number]: number;
  };
}
