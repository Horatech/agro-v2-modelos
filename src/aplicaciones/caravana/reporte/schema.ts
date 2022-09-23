import { ICoordenadas } from "../../../auxiliares";

export interface IReporteCaravana {
  ubicacion: ICoordenadas;
  idAnimal?: string;
  dentroDelCorral?: boolean;
  dentroDelEstablecimiento?: boolean;
}
