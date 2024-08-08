import { ICliente } from "../cliente";
import { IEstablecimiento } from "../establecimiento";

export interface ICultivo {
    _id?: string;
    nombre?: string;
    fechaCreacion: string;
    idCliente: string;
    idEstablecimiento: string;
    idAmbiente: string;
    etapaCultivo?: 'etapaInicial' | 'etapaDesarrollo' | 'etapaMedia' | 'etapaFinal';
    ETcCultivo?: number;
    agroquimicos?: {
        tipoAgroquimico?: string;
        fechaAplicacion?: string;
    }[];
    datosCultivo?: {
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
    };
    // Virtuals
    establecimiento?: IEstablecimiento;
    cliente?: ICliente;
}

type OmitirCreate =
    | "_id"
    | "fechaCreacion"
    | "establecimiento"
    | "cliente";

export interface ICreateCultivo
    extends Omit<Partial<ICultivo>, OmitirCreate> { }

type OmitirUpdate =
    | "_id"
    | "fechaCreacion"
    | "establecimiento"
    | "cliente";

export interface IUpdateCultivo
    extends Omit<Partial<ICultivo>, OmitirUpdate> { }