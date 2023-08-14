import { ICoordenadas } from '../../../auxiliares';
import { ConfiguracionCisterna, Semaforo } from '../../../generales';

export interface ICreateCisterna {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: ConfiguracionCisterna;
  // Info
  tipo?: 'Cisterna' | 'Pozo';
  nombre?: string;
  direccion?: string;
  localidad?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas | null;
}
