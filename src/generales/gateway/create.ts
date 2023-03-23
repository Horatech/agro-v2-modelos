import { ICoordenadas } from "../../auxiliares/coordenadas";
export interface ICrearGateway {
  _id: string;
  gatewayEui: string;
  coordenadas: ICoordenadas;
}
