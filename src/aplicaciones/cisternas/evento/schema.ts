export interface IEventoNivelCisterna {
  fecha: string;
  evento?: 'Error de lectura de sensor';
}

export interface IEventoBombaCisterna {
  fecha: string;
  evento?: string;
}
