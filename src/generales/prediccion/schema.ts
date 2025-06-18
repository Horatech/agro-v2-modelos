import { IAmbiente } from "../..";

export interface IRecomendacionRiego {
  fecha?: string;
  cantidad?: number;
}

export interface IRecomendacionEnfermedades {
  enfermedad?: string;
  resultado?: number;
}

export interface IPrediccionRiego {
  _id?: string;
  fechaCreacion?: string;
  // DATOS prediccion
  fecha?: string;
  idSiembraChaman?: string;
  lote?: string;
  capacidadCampo?: number;
  puntoMarchitez?: number;
  recomendacion?: IRecomendacionRiego[];
  // relaciones
  idAmbiente?: string;
  // virtuals
  ambiente?: IAmbiente;
}

export interface IPrediccionEnfermedades {
  _id?: string;
  fechaCreacion?: string;
  // DATOS prediccion
  fecha?: string;
  idSiembraChaman?: string;
  lote?: string;
  cultivo?: string;
  recomendacion?: IRecomendacionEnfermedades[];
  // relaciones
  idAmbiente?: string;
  // virtuals
  ambiente?: IAmbiente;
}
