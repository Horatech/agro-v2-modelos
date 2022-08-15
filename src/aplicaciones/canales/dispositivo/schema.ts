import { ICoordenadas } from "../../../auxiliares";
import { IAlerta } from "../alerta";
import { IReporte } from "../reporte";

export interface IDispositivoCanal {
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
  ultimaComunicacion?: {
    fecha: string;
    bateria?: number;
    cargando?: boolean;
    frecuenciaReporte?: number;
  };
  igm?: number;
  //
  nombre?: string;
  direccion?: string;
  ubicacion?: ICoordenadas;
}
