export interface IAlertaNivelCisterna {
  fecha: string;
  alerta?: 'Error de lectura de sensor';
}

export interface IAlertaBombaCisterna {
  fecha: string;
  alerta?: 'Error de Downlink';
}
