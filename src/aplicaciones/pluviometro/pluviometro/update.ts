import { IAlerta, IReporte, Semaforo } from "../../../generales";

export interface IUpdatePluviometro {
  idCliente?: string;
  idEstablecimiento?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
  radioInfluencia?: number;
  //
  ultimaComunicacion?: string;
  ultimoEstado?: "Ok" | "Alerta";
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
