import { ICoordenadas } from "../../../auxiliares";

export interface IReporteCaravana {
  ubicacion: ICoordenadas;
  fixTime?: number;
  idAnimal?: string;
  dentroDelLote?: boolean;
  dentroDelEstablecimiento?: boolean;
}
