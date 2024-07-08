import { ConfiguracionBin } from "../../../generales";

export interface IDispositivoBin {
  // carga de usuario
  configuraciones?: ConfiguracionBin;
  asignado?: boolean;
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
  // Ultima comunicación
  ultimaComunicacion?: string;
  bateria?: number;
  cargando?: boolean;
}
