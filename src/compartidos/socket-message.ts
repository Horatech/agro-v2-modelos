export interface ISocketMessage {
  /**
   * Las entidad modificadas (clientes, usuarios, etc)
   */
  path: string;
  /**
   * Otras entidades modificadas (no se devuelve el body)
   */
  paths?: string;
  /**
   * Metodo HTTP ejecutado (post, put, delete)
   */
  method?: string;
  /**
   * El id del usuario que ejecutó la accion
   */
  idUser?: string;
  /**
   * El id del cliente al que pertenece el usuario que ejecutó la accion
   */
  idCliente?: string;
  /**
   * El body del objeto creado/modificado/eliminado
   */
  body?: Record<string, any>;
  /**
   * Por que el usuario recibio el mensaje (para debug mas que nada)
   */
  motivo?: string;
}
