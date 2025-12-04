export type TemplatesWhatsapp = "Estado Bombeo" | "Estado Bombeo Estado";

export type TemplatesMail =
  | TemplatesWhatsapp
  | "Nuevo usuario"
  | "Reset de contraseña"
  | "Cambio de contraseña";

export interface IConfigTwilio {
  //Mensajes y llamadas
  accSid?: string;
  authToken?: string;
  msgServiceSid?: string;
  statusCallback?: string;
  phoneSms?: string;
  phoneWhatsapp?: string;
  phoneLlamada?: string;
  templatesWhatsapp?: {
    [K in TemplatesWhatsapp]?: string;
  };

  //Email
  senderEmail?: string;
  senderName?: string;
  senderAddress?: string;
  senderCity?: string;
  senderState?: string;
  senderZip?: number;
  sendGridApiKey?: string;
  templatesMail?: {
    [K in TemplatesMail]?: string;
  };
}
