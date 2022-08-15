export interface ICreateAlertaCanal {
  deveuiCentral: string;
  numero: number;
  tipo: "Entrada" | "Salida";
  fecha?: string;
  alerta:
    | "Nivel muy alto"
    | "Nivel muy bajo"
    | "Canal no reporta"
    | "Batería muy baja";
}
