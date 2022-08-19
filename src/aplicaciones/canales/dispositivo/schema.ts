export interface IDispositivoCanal {
  igm?: number;
  ultimaComunicacion?: {
    fecha: string;
    bateria: number;
    cargando: boolean;
    frecuenciaReporte: number;
  };
}
