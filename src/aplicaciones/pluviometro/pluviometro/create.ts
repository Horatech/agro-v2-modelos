import { IAlerta, IReporte, IUbicacionV2, Semaforo } from "../../..";

export interface ICreatePluviometro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
  radioInfluencia?: number;
  ubicacion?: IUbicacionV2;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
