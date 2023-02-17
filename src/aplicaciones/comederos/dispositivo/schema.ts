import { Color } from '../../..';

export interface IDispositivoComedero {
  // carga de usuario
  igm?: number;
  configuraciones?: { colorIcono: string | null; coloresNivel: Color[] | null };
  // Config reportada
  encendida?: boolean;
  // CUANTAS VECES REPORTA POR LORA
  intervaloDeLectura?: number;
  adr?: boolean;
  dr?: number;
  muestrasPorLectura?: number;
  lecturasPorReporte?: number;
  promediarLecturas?: boolean;
  mensajesConfirmados?: boolean;
  vMajor?: number;
  vMinor?: number;
  vPatch?: number;
  asignado?: boolean;
  // Ultima comunicación
  ultimaComunicacion?: string;
  bateria?: number;
  cargando?: boolean;
}
