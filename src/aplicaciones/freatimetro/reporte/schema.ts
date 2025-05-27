export interface IReporteFreatimetro {
  alerta?: boolean;
  nivel?: number;
  bateria?: number;
  bateriaBaja?: boolean;
  alertaNivel?: {
    nivel?: string;
    color?: string;
    nivelAjustado?: number;
  };
}
