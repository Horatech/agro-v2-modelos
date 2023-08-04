export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEntrada?: boolean;
  haySalida?: boolean;
  cantidadNiveles?: number;
  arrancadoresHabilitados?: {
    [numero: number]: boolean;
  };
}
