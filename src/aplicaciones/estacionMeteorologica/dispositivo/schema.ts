export interface IDispositivoEstacionMeteorologica {
  frecuenciaDeReporte?: number;
  mensajeConfirmados?: boolean;
  configuraciones?: {
    colorIcono: string | null;
    colorAlerta: string | null;
  };
}
