export interface IReporteCanal {
  distancia?: number;
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
  tipoCanal?: 'Entrada' | 'Salida';
  noReenviar?: boolean;
}
