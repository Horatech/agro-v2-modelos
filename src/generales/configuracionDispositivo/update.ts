export interface IUpdateConfiguracionDispositivo {
  deveui?: string;
  deviceName?: string;
  fecha?: string;
  // Tentant
  idCliente: string;
  idEstablecimiento?: string;
  // Info de configuracion
  config?: Record<string, any>;
}
