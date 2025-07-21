import { ICirculo } from "./circulo";
import { ICoordenadas } from "./coordenadas";
import { IPoligono } from "./poligono";

export interface IUbicacion {
  poligono: IPoligono;
  circulo?: ICirculo;
  centro?: ICoordenadas;
  nombre?: string;
  superficie?: number;
}
