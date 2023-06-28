import { ICliente } from "../cliente";
import { IDispositivo } from "../dispositivo";
import { IEstablecimiento } from "../establecimiento";

export interface IConfiguracionDispositivo {
  _id?: string;
  deveui?: string;
  deviceName?: string;
  fecha?: string;
  // Tentant
  idCliente: string;
  idEstablecimiento?: string;
  // Info de configuracion
  config?: Record<string, any>;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  dispositivo?: IDispositivo;
}
