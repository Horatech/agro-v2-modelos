export interface ConfiguracionEstablecimiento {
  colorLinea?: string | null;
  colorRelleno?: string | null;
}

export interface ConfiguracionLote {
  colorLinea?: string | null;
  colorRelleno?: string | null;
}

export interface ConfiguracionZona {
  colorLinea?: string | null;
  colorRelleno?: string | null;
}

export interface ConfiguracionAnimal {
  colorIcono?: string | null;
  colorError?: string | null;
  colorDentro?: string | null;
  colorFueraLote?: string | null;
  colorFueraEst?: string | null;
}

export interface ConfiguracionCanal {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionBin {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionComederos {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionBombaSumergible {
  colorIcono?: string | null;
  colorError?: string | null;
  colorEncendida?: string | null;
  colorApagada?: string | null;
}

export interface ConfiguracionCisterna {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionLamina {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;

  frecReporte?: number;
}

export interface ConfiguracionBombeo {
  colorIcono?: string | null;
  colorError?: string | null;
}

export interface ConfiguracionEstacionMeteorologica {
  colorIcono?: string | null;
  colorError?: string | null;
}

export interface ConfiguracionFreatimetro {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionPluviometro {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionSilobolsa {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionTracker {
  colorIcono?: string | null;
  colorError?: string | null;
}

export interface ConfiguracionHumedadSuelo {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface ConfiguracionSensorRPM {
  colorIcono?: string | null;
  colorError?: string | null;
  coloresNivel?: Semaforo[] | null;
}

export interface Configuraciones {
  // Colores
  establecimientos?: ConfiguracionEstablecimiento;
  lotes?: ConfiguracionLote;
  zonas?: ConfiguracionZona;
  animales?: ConfiguracionAnimal;
  canal?: ConfiguracionCanal;
  comederos?: ConfiguracionComederos;
  cisterna?: ConfiguracionCisterna;
  lamina?: ConfiguracionLamina;
  bombeo?: ConfiguracionBombeo;
  estacionMeteorologica?: ConfiguracionEstacionMeteorologica;
  freatimetro?: ConfiguracionFreatimetro;
  pluviometro?: ConfiguracionPluviometro;
  tracker?: ConfiguracionTracker;
  humedadSuelo?: ConfiguracionHumedadSuelo;
  silobolsas?: ConfiguracionSilobolsa;
}

export interface Semaforo {
  valorDesde: number;
  valorHasta: number;
  color: string;
  etiqueta?: string;
}
