import { ConfiguracionBin, ICoordenadas } from "../../..";

export interface ICreateBin {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del canal
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionBin;
  // Polyline
  ubicacion?: ICoordenadas;
}
