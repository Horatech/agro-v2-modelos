export interface IAlertaBombeoCentralV2 {
  // Fecha de llegada del mensaje
  fecha?: string;
  // valores
  tipo?: "Central";
  mensaje?: "Corte de energía" | "Restablecimiento de energía";
}
