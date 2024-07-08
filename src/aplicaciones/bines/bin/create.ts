import { ConfiguracionBin, IPolyline } from "../../..";

export interface ICreateBin {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del canal
  deveuiSensorBin?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionBin;
  // Polyline
  ubicacion?: IPolyline;
}
