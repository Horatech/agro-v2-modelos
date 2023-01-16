export interface IDispositivoBombeo {
  powerOn?: boolean;
  bateria?: number;
  configuraciones?: {
    colorIcono: string | null;
    colorIconoAlerta: string | null;
  };
}
