import { IConfigLora } from "./configLora";
import { TipoDispositivo } from "./tipoDispositivo";

export interface ITipoDispositivo {
  _id: string;
  nombre: TipoDispositivo;
  integrationUrl?: string;
  loraServers?: IConfigLora[];
}
