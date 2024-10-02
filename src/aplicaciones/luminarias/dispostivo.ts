import { ICoordenadas } from "../../auxiliares";

export interface IDispositivoLuminaria {
  dimmer?: number;
  intervaloComunicacion?: number;
  ldr?: number;
  ldrInferior?: number;
  ldrSuperior?: number;
  minutosAmanecer?: number;
  minutosAtardecer?: number;
  offsetAmanecer?: number;
  offsetAtardecer?: number;
  ubicacionManual?: ICoordenadas;
}
