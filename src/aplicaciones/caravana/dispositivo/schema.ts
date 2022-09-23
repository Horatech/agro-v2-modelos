export interface IDispositivoCaravana {
  asignado?: boolean;
  acelerometro?: {
    escala?: string;
    frecuencia?: number;
    freefallMg?: number;
    freefallMs?: number;
    wakeMg?: number;
    wakeMs?: number;
  };
}
