export interface IDatosTipoSuelo {
    _id?: string;
    nombre?: string;
    // retencion de agua cm por cada 30 cm de suelo
    retencionAgua?: { min?: number; max?: number };
}