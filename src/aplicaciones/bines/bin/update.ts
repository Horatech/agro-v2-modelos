import { ICoordenadas } from "../../../auxiliares";
import { ConfiguracionCanal, IAlerta, IReporte } from "../../../generales";

export interface IUpdateBin {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  fechaCreacion?: string;
  //deveui del Bin
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: ConfiguracionCanal;
  ubicacion?: ICoordenadas;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
