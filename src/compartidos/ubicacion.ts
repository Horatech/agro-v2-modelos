import { ICoordenadas } from "./coordenadas";
import { IPoligono } from "./poligono";

export interface IUbicacion {
  poligono: IPoligono;
  centro?: ICoordenadas;
  nombre?: string;
  superficie?: number;
}
