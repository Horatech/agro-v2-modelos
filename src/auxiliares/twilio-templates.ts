import { IConfigTwilio } from "../generales";

// WHATSAPP

/**
 * @example 'En el bombeo {{1}}, la bomba {{2}} está {{3}}. Esta es una notificación automática del sistema.'
 * @param 1 Bombeo {{1}} // Nombre del bombeo
 * @param 2 Valor {{2}} // Nombre o numero de bomba
 * @param 3 Estado {{3}} // Encendido, Apagado
 * @param sid HX77a6e9216b71d1ab0a0f7ecb479956c4
 */
export interface ITwilioEstadoBombeoTemplate {
  1: string;
  2: string;
  3: string;
  sid: string;
}

export interface ITwilioMsgGenericTemplate {
  [key: number]: string;
  sid: string;
}

export interface IWhatsappTwilio {
  datos?: ITwilioMsgGenericTemplate | ITwilioEstadoBombeoTemplate;
  pais?: string;
  telefono?: string;
  idCliente?: string;
  usuario?: string;
  twilio?: IConfigTwilio;
  extra?: Record<string, any>;
}

// SMS

export interface ISMSTwilio {
  pais?: string;
  telefono?: string;
  mensaje?: string;
  idCliente?: string;
  usuario?: string;
  twilio?: IConfigTwilio;
  extra?: Record<string, any>;
}

// LLAMADAS

export interface ILlamadaTwilio {
  telefono?: string;
  mensaje?: string;
  idCliente?: string;
  usuario?: string;
  twilio?: IConfigTwilio;
  extra?: Record<string, any>;
}

// EMAIL

export interface IEmailDataBase {
  sid: string;
  subject?: string;
}

export interface IEmailGenerico extends IEmailDataBase {
  [key: string]: string | undefined;
}

export interface IEmailResetPassword extends IEmailDataBase {
  token: string;
}

export interface IEmailNuevoUsuario extends IEmailDataBase {
  usuario: string;
  password: string;
}

export interface IEmailCambioPassword extends IEmailDataBase {
  codigo: string;
}

export interface IEmailTwilio {
  email?: string;
  datos?:
    | IEmailGenerico
    | IEmailResetPassword
    | IEmailNuevoUsuario
    | IEmailCambioPassword;
  idCliente?: string;
  usuario?: string;
  twilio?: IConfigTwilio;
  extra?: Record<string, any>;
}
