export interface IDatosCultivo {
    _id?: string;
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