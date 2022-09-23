export interface ICreateAnimal {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
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
