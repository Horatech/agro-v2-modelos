import { ICoordenadas } from "../../auxiliares/coordenadas";

export interface IUpdateGateway {
  _id: string;
  gatewayEui: string;
  coordenadas: ICoordenadas;
}
