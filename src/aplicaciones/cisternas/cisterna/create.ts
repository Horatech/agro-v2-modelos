import { ICoordenadas } from '../../../auxiliares';
import { Semaforo } from '../../../generales';

export interface ICreateCisterna {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas;
}
