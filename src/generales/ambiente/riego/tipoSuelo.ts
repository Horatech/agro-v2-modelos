export interface ITipoSuelo {
    _id?: string;
    fechaCreacion: string;
    nombre?: string;
    // retencion de agua cm por cada 30 cm de suelo
    retencionAgua?: { min?: number; max?: number };
}

type OmitirCreate =
    | "_id"
    | "fechaCreacion";

export interface ICreateTipoSuelo
    extends Omit<Partial<ITipoSuelo>, OmitirCreate> { }

type OmitirUpdate =
    | "_id"
    | "fechaCreacion";

export interface IUpdateTipoSuelo
    extends Omit<Partial<ITipoSuelo>, OmitirUpdate> { }