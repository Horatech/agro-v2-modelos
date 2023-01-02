import { ICoordenadas } from "./coordenadas";
import { IPoligono } from "./poligono";

export interface IUbicacionV2 {
  //
  codigoPostal?: string;
  localidad?: string;
  partido?: string;
  provincia?: string;
  pais?: string;
  // Solo direcciones
  direccion?: string;
  calle?: string;
  numero?: string;
  piso?: string;
  departamento?: string;
  // Solo Punto
  coordenadas?: ICoordenadas;
  // Solo Poligono
  poligono?: IPoligono;
  centro?: ICoordenadas;
  superficie?: number;
}
