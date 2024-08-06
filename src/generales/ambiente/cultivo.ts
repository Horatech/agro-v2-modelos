import { IDatosCultivo } from "./riego/datosCultivo";

export interface ICultivo {
    nombre?: string;
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