import { ICoordenadas } from "../../../auxiliares";

export interface IReporteCaravana {
  ubicacion: ICoordenadas;
  idAnimal?: string;
  dentroDelLote?: boolean;
  dentroDelEstablecimiento?: boolean;
}
