export interface ISemilla {
  _id: string;
  campania: string;
  ciclo: string;
  cultivo: string;
  variedad: string;
  semillero: string;
  fechaCreacion: string;
}

type OmitirCreate = "_id" | "fechaCreacion";

export interface ICreateSemilla extends Omit<Partial<ISemilla>, OmitirCreate> {}

type OmitirUpdate = "_id" | "fechaCreacion";

export interface IUpdateSemilla extends Omit<Partial<ISemilla>, OmitirUpdate> {}
