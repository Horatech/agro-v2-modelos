import { IPrediccionEnfermedades, IPrediccionRiego } from "./schema";

type OmitirUpdate = "_id" | "fechaCreacion" | "ambiente";

export interface IUpdatePrediccionRiego
  extends Omit<Partial<IPrediccionRiego>, OmitirUpdate> {}

export interface IUpdatePrediccionEnfermedades
  extends Omit<Partial<IPrediccionEnfermedades>, OmitirUpdate> {}
