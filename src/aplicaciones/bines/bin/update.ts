import { IPolyline } from "../../../auxiliares";
import { ConfiguracionCanal, IAlerta, IReporte } from "../../../generales";

export interface IUpdateBin {
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
  configuraciones?: ConfiguracionCanal;
  // Polyline
  ubicacion?: IPolyline;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
