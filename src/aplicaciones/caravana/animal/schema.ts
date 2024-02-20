import {
  ConfiguracionAnimal,
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
} from '../../../generales';

export interface IAnimal {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: ConfiguracionAnimal;
  //
  activo?: boolean;
  fechaCreacion?: string;
  fechaBaja?: string;
  // Info del animal
  identificacionOficial?: string;
  fechaNacimiento?: string;
  especie?: string;
  raza?: string;
  categoria?: string;
  subcategoria?: string;
  sexo?: string;
  peso?: number;
  idMadre?: string;
  idPadre?: string;
  foto?: string;
  //
  idDispositivo?: string;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  dispositivo?: IDispositivo;
  madre?: IAnimal;
  padre?: IAnimal;
}
