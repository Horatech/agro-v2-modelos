export interface ICreateReporteCanal {
  deveuiCentral: string;
  numero: number;
  tipo: "Entrada" | "Salida";
  fecha?: string;
  bateria: number;
  cotaMm: number;
}
