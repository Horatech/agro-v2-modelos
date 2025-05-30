export interface IReportePresionAgua {
  alerta?: boolean;
  presion?: number; // En kpa
  bateria?: number;
  bateriaBaja?: boolean;
  nivel?: {
    etiqueta?: string;
    color?: string;
  };
}
