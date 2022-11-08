export interface IReporteNivelCisterna {
  distancia?: number;
  bateria?: number;
  cargando?: boolean;
}

export interface IReporteBombaCisterna {
  caudalAcumulado?: number;
  encendida?: boolean;
  hayFalla?: boolean;
  hay220?: boolean;
}
