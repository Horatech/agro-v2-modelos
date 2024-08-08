export interface IDatosCultivo {
    _id?: string;
    nombre?: string;
    fechaCreacion: string;
    etcRecomendadosPorEtapa: {
        etapaInicial?: { min: number; max: number };
        etapaDesarrollo?: { min: number; max: number };
        etapaMedia?: { min: number; max: number };
        etapaFinal?: { min: number; max: number };
    },
    kcRecomendadosPorEtapa: {
        etapaInicial?: { min: number; max: number };
        etapaDesarrollo?: { min: number; max: number };
        etapaMedia?: { min: number; max: number };
        etapaFinal?: { min: number; max: number };
    }
    umbralHumedad?: {
        min?: number;
        max?: number;
    };
    umbralTemperatura?: {
        min?: number;
        max?: number;
    };
}

type OmitirCreate =
    | "_id"
    | "fechaCreacion";

export interface ICreateDatosCultivo
    extends Omit<Partial<IDatosCultivo>, OmitirCreate> { }

type OmitirUpdate =
    | "_id"
    | "fechaCreacion";

export interface IUpdateDatosCultivo
    extends Omit<Partial<IDatosCultivo>, OmitirUpdate> { }