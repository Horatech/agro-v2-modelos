export interface IReporteBin {
  distancia?: number;
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
  tipoCanal?: "Entrada" | "Salida";
}
