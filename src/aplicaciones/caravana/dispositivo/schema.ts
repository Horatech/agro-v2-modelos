// 0	Dispositivo encendido
// 1	GPS habilitado
// 2	Acelerómetro habilitado
// 3	ADR habilitado

// 0	Byte estado *	uint8
// 1-2	Frecuencia de reporte (entero sin signo)	uint16
// 3	DR (0 al 6)	uint8
// 4	Nivel de acelerómetro (duración) 0 al 5	uint8
// 5	Nivel de acelerómetro (sensibilidad) 0 al 5	uint8
// 6	Semver: MAJOR	uint8
// 7	Semver: MINOR	uint8
// 8	Semver: PATCH	uint8

export interface IDispositivoCaravana {
  encendida?: boolean;
  gps?: boolean;
  acelerometro?: boolean;
  adr?: boolean;
  frecuenciaReporte?: number;
  dr?: number;
  duracionAcelerometro?: number;
  sensibilidadAceletrometro?: number;
  // Versión en aprtes
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
  asignado?: boolean;
}
