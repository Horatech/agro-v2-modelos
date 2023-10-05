export interface IResumenCliente {
  cliente?: string;
  cantDispositivo?: number;
  cantUsuarios?: number;
  cantIntegraciones?: number;
  cantTipoDispositivos?: number;
}

export interface IResumen {
  // Detalles por cliente
  clientes?: IResumenCliente[];
  // Generales de la aplicacion
  cantClientes?: number;
  cantDispositivo?: number;
  cantUsuarios?: number;
  cantIntegraciones?: number;
  cantTipoDispositivos?: number;
  cantGateways?: number;
}
