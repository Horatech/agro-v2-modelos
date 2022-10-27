export interface IDispositivoCaravana {
  asignado?: boolean;
  encendida?: boolean;
  gps?: boolean;
  frecuenciaReporte?: number;
  adr?: boolean;
  dr?: number;
  vPrincipal?: number;
  vSecundaria?: number;
  vTerciaria?: number;
  acelerometro?: {
    escala?: string;
    frecuencia?: number;
    freefallMg?: number;
    freefallMs?: number;
    wakeMg?: number;
    wakeMs?: number;
  };
}
