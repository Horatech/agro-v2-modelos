import { IReporte } from "../../../generales";
import { IReporteModoTest } from "../reporteModoTest";

// ============================================================================
// NUEVOS TIPOS PARA REACTIVACIÓN AUTOMÁTICA
// ============================================================================

/**
 * Estados posibles del proceso de reactivación automática
 */
export type EstadoReactivacion =
  | "corte_detectado" // Corte en curso, energía = false
  | "restauracion_detectada" // Energía restaurada, proceso iniciado
  | "esperando_inicializacion" // Esperando puerto 135 con init completa
  | "esperando_tiempo_minimo" // Esperando delay configurado
  | "condiciones_cumplidas" // Listo para ejecutar
  | "ejecutando" // Enviando comando puerto 150
  | "completada" // Éxito, comando enviado
  | "cancelada" // No se ejecutó (ver motivoNoReactivacion)
  | null;

/**
 * Configuración de reactivación automática por dispositivo
 * null = no configurado (requiere configuración manual uno por uno)
 */
export interface IConfigReactivacionAuto {
  /**
   * Si está habilitada la reactivación automática
   */
  habilitada: boolean;

  /**
   * Tiempo mínimo de espera después de restauración antes de reactivar
   * Ejemplo: 10 minutos - permite que sistemas se estabilicen
   */
  tiempoMinimoEsperaMinutos: number;

  /**
   * Tiempo máximo que puede durar el corte para considerar reactivación
   * Si el corte duró más, NO se reactiva automáticamente (requiere revisión manual)
   * Ejemplo: 120 minutos - si corte > 2hs, algo grave pasó
   */
  tiempoMaximoCorteMinutos: number;

  // FUTURO v2: Escalonamiento
  // grupoEscalonamiento?: string;
  // prioridadArranque?: number;
  // intervaloEntreGrupos?: number;
}

export interface IConfigReseteoFallas {
  habilitado?: boolean;

  /**
   * Números de fallas a resetear automáticamente (cada numero representa una falla)
   */
  nroFallas?: number[];

  /**
   * Tipo de arrancador al que aplica el reseteo de fallas
   */
  tipoArrancador?: "SSW06" | "SSW07" | "SSW900" | "CFW11";
}

/**
 * Estado de corte de energía y proceso de reactivación
 */
export interface IEstadoPreCorte {
  /**
   * Si estaba en modo automático cuando se cortó la energía
   */
  estabaEnAutomatico: boolean;

  /**
   * Timestamp ISO del momento del corte
   */
  timestampCorte: string;

  /**
   * Timestamp ISO del momento de restauración
   */
  timestampRestauracion?: string;

  /**
   * Duración del corte en minutos (calculado)
   */
  duracionCorteMinutos?: number;

  /**
   * Si hay una reactivación pendiente de ejecutar
   */
  reactivacionPendiente: boolean;

  /**
   * Si la reactivación se completó exitosamente
   */
  reactivacionCompletada?: boolean;

  /**
   * Motivo por el cual no se reactivó (para debugging y UI)
   */
  motivoNoReactivacion?: string;

  /**
   * Estado actual del proceso de reactivación
   */
  estadoReactivacion?: EstadoReactivacion;

  /**
   * Última vez que se verificaron las condiciones
   */
  timestampUltimaVerificacion?: string;
}

/**
 * Registro histórico de un evento de corte/reactivación
 */
export interface IHistorialReactivacion {
  timestampCorte: string;
  timestampRestauracion: string;
  duracionCorteMinutos: number;
  reactivacionEjecutada: boolean;
  motivo?: string;
  timestampReactivacion?: string;
}

/**
 * Estado de inicialización completo (extensión del existente)
 */
export interface IEstadoInicializacionCompleto {
  entrada?: boolean;
  salida?: boolean;
  arrancadores?: {
    [numero: number]: boolean;
  };
  /**
   * Si la inicialización está completa (todos los dispositivos respondieron OK)
   */
  inicializacionCompleta?: boolean;
  /**
   * Timestamp de cuando se completó la inicialización
   */
  timestampInicializacion?: string;
}

// ============================================================================
// INTERFAZ PRINCIPAL (EXTENDIDA)
// ============================================================================

export interface IDispositivoBombeoV2 {
  arranqueAutomatico?: boolean;
  hayEnergia?: boolean;
  bateriaInterna?: number;
  bateriaExterna?: number;
  puertoUltimoMensaje?: number;

  // MODIFICADO: Estado inicializacion con campos adicionales
  estadoInicializacion?: IEstadoInicializacionCompleto;

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

  // ============================================================================
  // NUEVO: REACTIVACIÓN AUTOMÁTICA
  // ============================================================================

  /**
   * Configuración de reactivación automática
   * - null o undefined = NO configurado (requiere configuración manual uno por uno)
   * - objeto = configurado con parámetros específicos
   *
   * Por defecto debe ser null para que cada dispositivo se configure explícitamente
   */
  configReactivacionAuto?: IConfigReactivacionAuto | null;

  /**
   * Estado actual de cortes de energía y proceso de reactivación
   */
  estadoPreCorte?: IEstadoPreCorte;
}
