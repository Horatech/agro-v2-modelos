export interface ICultivo {
    nombre?: string;
    fechaCreacion: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    variedad?: string;
}