export interface IReporteEstacionMeteorologica {
  numeroMensaje?: number;
  tilt?: boolean;
  // Datos Reportados
  temperatura?: number;
  humedad?: number;
  presion?: number;
  intensidadLuminica?: number;
  direccionVientoMinima?: number;
  direccionVientoMaxima?: number;
  direccionVientoPromedio?: number;
  velocidadVientoMinima?: number;
  velocidadVientoMaxima?: number;
  velocidadVientoPromedio?: number;
  lluviaAcumulada?: number;
  duracionLluviaAcumulada?: number;
  /**
   * @deprecated
   */
  intensidadLluvia?: number;
  /**
   * @deprecated
   */
  intensidadMaximaLluvia?: number;
  // Datos Calculados
  lluviaIntervalo?: number;
  duracionLlueviaIntervalo?: number;
  fechaDesde?: string;
}
