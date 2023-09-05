import { ICoordenadas } from "../../../auxiliares";
import {
  ConfiguracionBombaSumergible,
  ConfiguracionComederos,
} from "../../../generales";
import { Controlador } from "./schema";

export interface ICreateBombaSumergible {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  configuraciones?: ConfiguracionBombaSumergible;
  //
  nombre?: string;
  idDispositivo?: string;
  controlador?: Controlador;
  ubicacion?: ICoordenadas;
}
