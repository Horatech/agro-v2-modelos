export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEntrada?: boolean;
  haySalida?: boolean;
  cantidadNiveles?: number;
  arrancadoresHabilitados?: {
    [numero: number]: boolean;
  };
  tipoArrancadores?: {
    [numero: number]: boolean;
  };
  hayEnergia?: boolean;
  bateriaInterna?: number;
  bateriaExterna?: number;
  // Mas cosas
  bateriaCanalEntrada?: number;
  bateriaCanalSalida?: number;
  nivelCanalEntrada?: number;
  nivelCanalSalida?: number;
  estadoArrancadores?: {
    [numero: number]: boolean;
  };
}
