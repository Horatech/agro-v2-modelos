import { ITipoSuelo } from "./tipoSuelo";

export interface ICultivo {
    _id: string;
    nombre?: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    kcPorEtap?: {
        etapaInicial?: { min: number; max: number };
        etapaDesarrollo?: { min: number; max: number };
        etapaMedia?: { min: number; max: number };
        etapaFinal?: { min: number; max: number };
    };
    ETcPorEtap?: {
        etapaInicial?: { min: number; max: number };
        etapaDesarrollo?: { min: number; max: number };
        etapaMedia?: { min: number; max: number };
        etapaFinal?: { min: number; max: number };
    };
    ETcCultivo?: number;
    agroquimicos?: {
        tipoAgroquimico?: string;
        cantidadRecomendada?: string;
        fechaAplicacion?: string;
    }[];
    umbralHumedad?: {
        min?: number;
        max?: number;
    };
    umbralTemperatura?: {
        min?: number;
        max?: number;
    };
    IdSuelo?: string[];
    // Virtuals
    tipoSuelo?: ITipoSuelo[];
}