import { ICoordenadas } from "../../auxiliares/coordenadas";

export interface IUpdateGateway {
  gatewayEui?: string;
  ubicacion?: ICoordenadas;
}
