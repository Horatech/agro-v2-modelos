export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEntrada?: boolean;
  haySalida?: boolean;
  cantidadNiveles?: number;
  arrancadoresHabilitados?: {
    [numero: number]: boolean;
  };
  hayEnergia?: boolean;
  bateriaInterna?: number;
  bateriaExterna?: number;
  // bateriaCanalEntrada?: number;
  // bateriaCanalSalida?: number;
  // nivelCanalEntrada?: number;
  // nivelCanalSalida?: number;
}
