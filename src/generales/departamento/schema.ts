export interface IDepartamento {
  _id: string;
  idDepartamentoChaman: string;
  nombre?: string;
  provincia?: string;
  fechaCreacion: string;
}
type OmitirCreate = "_id" | "fechaCreacion";

export interface ICreateDepartamento
  extends Omit<Partial<IDepartamento>, OmitirCreate> {}

type OmitirUpdate = "_id" | "fechaCreacion";

export interface IUpdateDepartamento
  extends Omit<Partial<IDepartamento>, OmitirUpdate> {}
