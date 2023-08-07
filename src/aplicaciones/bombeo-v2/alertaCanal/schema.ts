export interface IAlertaBombeoCanalV2 {
  // Fecha de llegada del mensaje
  fecha: string;
  // valores
  tipo: "Entrada" | "Salida";
  ultimoReporte: string;
  ultimaBateria: number;
  ultimaLectura: number;
  mensaje: "Error de comunicación";
}
