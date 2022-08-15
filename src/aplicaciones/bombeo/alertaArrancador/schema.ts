export interface IAlertaBombeoArrancador {
  fecha: string;
  numero: number;
  tipo: "Encendido" | "Apagado";
  error:
    | "Arrancador en Error"
    | "Nivel Entrada Bajo"
    | "Nivel Salida Alto"
    | "Timeout Canal Entrada"
    | "Timeout Canal Salida"
    | "Ya Encendida"
    | "Ya Apagada"
    | "Error Interno";
}
