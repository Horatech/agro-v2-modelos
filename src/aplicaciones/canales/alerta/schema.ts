export interface IAlertaCanal {
  fecha: string;
  alerta?: 'Error de lectura de sensor';
  bateria?: number;
  cargando?: boolean;
  calidadDeLectura?: number;
}
