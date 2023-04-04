import { ConfiguracionBombeo } from "../../../generales";

export interface IDispositivoBombeo {
  powerOn?: boolean;
  bateria?: number;
  configuraciones?: ConfiguracionBombeo;
}
