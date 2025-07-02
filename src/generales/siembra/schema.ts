import { ICultivo } from "../cultivo";

export interface ISiembra {
  _id: string;
  fechaCreacion: string;
  idCliente?: string;
  cultivo?: ICultivo;
  fechaSiembra?: string;
  fechaCosecha?: string;
  idSiembraChaman?: string;
  idAmbiente?: string;
  active?: boolean;
}

type OmitirCreate = "_id" | "fechaCreacion";

export interface ICreateSiembra extends Omit<Partial<ISiembra>, OmitirCreate> {}

type OmitirUpdate = "_id" | "fechaCreacion";

export interface IUpdateSiembra extends Omit<Partial<ISiembra>, OmitirUpdate> {}
