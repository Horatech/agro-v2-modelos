export type IEstadoBin =
  | "vacío"
  | "llenando"
  | "lleno"
  | "en uso"
  | "en espera"
  | "en limpieza"
  | "mantenimiento"
  | "transporte"
  | "descartado"
  | "fuera de servicio";

export interface IEstadoBinHistorial {
  _id?: string;
  fechaCreacion?: string;
  idCliente?: string;
  idBin: string;

  estadoAnterior?: IEstadoBin;
  estadoNuevo: IEstadoBin;
  fechaCambio: string;
  motivo?: string;
  idUser?: string;
}
