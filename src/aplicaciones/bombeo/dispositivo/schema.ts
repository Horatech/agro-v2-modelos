import { ICoordenadas } from "../../../auxiliares";

export interface IDispositivoBombeo {
  ubicacion?: ICoordenadas;
  powerOn?: boolean;
  bateria?: number;
}
