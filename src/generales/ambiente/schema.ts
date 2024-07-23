import { IEstacionMeteorologica, IFreatimetro, IPluviometro, ISensorHumedadSuelo } from '../../aplicaciones';
import { IUbicacion } from '../../auxiliares';
import { ICliente } from '../cliente';
import { IEstablecimiento } from '../establecimiento';
import { ISensorRef } from './sensorRef/schema';
export interface IAmbiente {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente: string;
  fechaCreacion: string;
  configuraciones?: { colorLinea: string | null; colorRelleno: string | null };
  region?: string;
  tipoSuelo?: string;
  cultivo?: string;
  faseCultivo?: string;

  sensoresSHS?: string[];
  sensoresPluviometro?: string[];
  sensoresFreatimetro?: string[];
  sensoresMeteorologica?: string[];

  //Populate
  establecimiento?: IEstablecimiento;
  cliente?: ICliente;
  // Virtuals
  dispositivoSHS?: ISensorHumedadSuelo[];
  dispositivoPluviometro?: IPluviometro[];
  dispositivoFreatimetro?: IFreatimetro[];
  dispositivoMeteorologica?: IEstacionMeteorologica[];
}
