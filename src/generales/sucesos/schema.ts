import { IAnimal } from '../../aplicaciones';
import { ICliente } from '../cliente';
import { IEstablecimiento } from '../establecimiento';
import { ILote } from '../lote';
import { IZona } from '../zona';

export interface ISuceso {
  _id?: string;
  fechaCreacion?: string;
  idEntidad?: string; // Animal - Canal - SHS
  tipo?: string; // Vacunación - Pesaje - Diagnóstico - Tratamiento
  detalles?: Record<string, any>;

  // Tenancy
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idZona?: string;

  // Populate
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  zona?: IZona;
  // Populate de Entidades
  animal?: IAnimal;
}

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'establecimiento'
  | 'lote'
  | 'zona'
  | 'cliente'
  | 'animal';

export interface ICreateSuceso extends Omit<Partial<ISuceso>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'establecimiento'
  | 'lote'
  | 'zona'
  | 'cliente'
  | 'animal';

export interface IUpdateSuceso extends Omit<Partial<ISuceso>, OmitirUpdate> {}
