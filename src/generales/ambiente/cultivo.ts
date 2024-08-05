export interface ICultivo {
    nombre?: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    recomendacionesKcPorEtap?: {
        etapaInicial?: { min: number; max: number };
        etapaDesarrollo?: { min: number; max: number };
        etapaMedia?: { min: number; max: number };
        etapaFinal?: { min: number; max: number };
    };
    recomendacionesAgroquimicos?: {
        tipoAgroquimico?: string;
        cantidadRecomendada?: string;
        fechaAplicacion?: string;
    }[];
}