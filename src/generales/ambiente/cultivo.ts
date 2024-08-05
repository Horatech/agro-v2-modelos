export interface ICultivo {
    nombre?: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    KcPorEtap?: {
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
    Agroquimicos?: {
        tipoAgroquimico?: string;
        cantidadRecomendada?: string;
        fechaAplicacion?: string;
    }[];
}