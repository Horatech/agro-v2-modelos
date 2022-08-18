export interface IDispositivoComedero {
  inicialMm?: number;
  alturaMaxima?: number;
  asignado?: boolean;
  ultimaComunicacion?: {
    fecha: string;
    bateria: number;
    cargando: boolean;
    frecuenciaReporte: number;
  };
}
