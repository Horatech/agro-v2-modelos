export interface IReporteEstacionClima {
  numeroMensaje: number;
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
  intensidadLluvia?: number;
  intensidadMaximaLluvia?: number;
  // Datos Calculados
  lluviaIntervalo?: number;
  duracionLlueviaIntervalo?: number;
}
