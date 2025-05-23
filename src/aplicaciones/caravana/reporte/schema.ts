import { ICoordenadas } from "../../../auxiliares";

export interface IReporteCaravana {
  ubicacion?: ICoordenadas;
  ubicacionCorregida?: ICoordenadas;
  fixTime?: number;
  idAnimal?: string;
  dentroDelLote?: boolean;
  dentroDelEstablecimiento?: boolean;
  satelites?: number;
  hdop?: number;
  tipo?: "Ubicacion" | "Alerta";
  mensaje?: string;
}
