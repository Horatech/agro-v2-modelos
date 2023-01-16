export interface IUpdateAnimal {
  // Tentant
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: {
    colorDentro: string | null;
    colorFueraLote: string | null;
    colorFueraEst: string | null;
    colorError: string | null;
  };
  //
  activo?: boolean;
  fechaBaja?: string;
  // Info del animal
  identificacionOficial?: string;
  fechaNacimiento?: string;
  especie?: string;
  raza?: string;
  categoria?: string;
  subcategoria?: string;
  sexo?: string;
  peso?: number;
  idMadre?: string;
  idPadre?: string;
  //
  idDispositivo?: string;
}
