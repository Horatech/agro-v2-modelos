export interface IReportePresionAgua {
  alerta?: boolean;
  presion?: number;
  bateria?: number;
  bateriaBaja?: boolean;
  nivel?: {
    etiqueta?: string;
    color?: string;
  };
}
