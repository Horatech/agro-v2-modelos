export interface IAlertaBombeoCanal {
  fecha: string;
  numero: number;
  tipo: "Entrada" | "Salida";
  alerta:
    | "Nivel muy alto"
    | "Nivel muy bajo"
    | "Canal no reporta"
    | "Batería muy baja";
}
