export interface IConfigCanal {
  numero: number;
  tipo?: "Entrada" | "Salida";
  cota?: number;
  cotaMinMm?: number;
  cotaMaxMm?: number;
  frecReporte?: number;
}
