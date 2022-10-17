interface INivel {
  litros: number;
  porcentaje: number;
}

export interface IDispositivoRepresa {
  nombre?: string;
  igm?: number;
  niveles?: {
    [altura: number]: INivel;
  };
  consumoPorHora?: number;
  ultimaComunicacion?: {
    fecha: string;
    bateria: number;
    cargando: boolean;
    frecuenciaReporte: number;
  };
}
