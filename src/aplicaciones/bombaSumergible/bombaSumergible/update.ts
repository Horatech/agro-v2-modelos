import { ICoordenadas } from "../../../auxiliares";
import { ConfiguracionBombaSumergible } from "../../../generales";
import { Controlador } from "./schema";

export interface IUpdateBombaSumergible {
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
