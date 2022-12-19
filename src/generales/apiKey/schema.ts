export interface IAPIkey {
  apiName: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  key: string;
  idCliente: string;
}

export interface IGetApiKey {
  apiName: string;
  fechaCreacion?: string;
  fechaExpiracion?: string;
  idCliente: string;
}
