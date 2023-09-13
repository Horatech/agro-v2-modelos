export interface IAlertaBombeoArrancadorV2 {
  // Fecha de llegada del mensaje
  fecha?: string;
  numero?: number;
  // valores
  tipo?: "Arrancador" | "Variador";
  mensaje?:
    | "Error al encender"
    | "Error al apagar"
    | "Error al habilitar"
    | "Error de estado"
    | "Error de comunicación";
}
