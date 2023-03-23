import { ICoordenadas } from "../../auxiliares/coordenadas";

export interface IGateway {
  _id: string;
  gatewayEui: string;
  coordenadas: ICoordenadas;
}
