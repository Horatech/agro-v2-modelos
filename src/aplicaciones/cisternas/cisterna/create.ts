export interface ICreateCisterna {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
}
