import { IDatosCultivo } from "./riego/datosCultivo";

export interface ICultivo {
    _id?: string;
    nombre?: string;
    fechaCreacion: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    ETcCultivo?: number;
    agroquimicos?: {
        tipoAgroquimico?: string;
        fechaAplicacion?: string;
    }[];
    idDatosCultivo?: string;
    // virtuals
    datosCultivo?: IDatosCultivo;
}

type OmitirCreate =
    | "_id"
    | "fechaCreacion";

export interface ICreateCultivo
    extends Omit<Partial<ICultivo>, OmitirCreate> { }

type OmitirUpdate =
    | "_id"
    | "fechaCreacion";

export interface IUpdateCultivo
    extends Omit<Partial<ICultivo>, OmitirUpdate> { }