import { IReporte } from "../../../generales";
import { IReporteModoTest } from "../reporteModoTest";

export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEnergia?: boolean;
  bateriaInterna?: number;
  bateriaExterna?: number;
  puertoUltimoMensaje?: number;

  // Estado inicializacion
  estadoInicializacion?: {
    entrada?: boolean;
    salida?: boolean;
    arrancadores?: {
      [numero: number]: boolean;
    };
  };

  //IGM
  igmEntrada?: number;
  igmSalida?: number;
  //

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
    [numero: number]: number;
  };
  valoresPorNivelSalida?: {
    [numero: number]: number;
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
  nombreArrancadores?: {
    [numero: number]: string;
  };
  sensorRpm?: {
    // el string es el objectId del sensor de rpm vinculado a la bomba del numero
    [numero: number]: string;
  };
  velocidadSincronica?: {
    [numero: number]: number;
  };
  velocidadActual?: {
    [numero: number]: number;
  };
  /// Caudal
  canieria?: {
    // el string es el objectId de la cañería asignada a la bomba del numero
    [numero: number]: string;
  };

  // El ultimo reporte de cada bomba
  reporteBombas?: {
    [numero: number]: IReporte;
  };

  // El ultimo reporte de Modo test
  ultimoTest?: IReporteModoTest;
}
