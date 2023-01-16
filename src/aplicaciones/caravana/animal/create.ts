export interface ICreateAnimal {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: {
    colorDentro: string | null;
    colorFueraLote: string | null;
    colorFueraEst: string | null;
    colorError: string | null;
  };
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
