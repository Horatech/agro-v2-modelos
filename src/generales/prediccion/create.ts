import { IPrediccionRiego } from "./schema";

type OmitirCreate = "_id" | "fechaCreacion" | "ambiente";

export interface ICreatePrediccionRiego
  extends Omit<Partial<IPrediccionRiego>, OmitirCreate> {}

export interface ICreatePrediccionEnfermedades
  extends Omit<Partial<IPrediccionRiego>, OmitirCreate> {}
