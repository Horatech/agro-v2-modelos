import { Semaforo } from "../../generales";

export interface IDispositivoLanzaHumedad {
  colores?: {
    icono?: string;
    error?: string;
    valores?: Semaforo[];
  };

  // MilesightDecoded
  ipso_version?: string;
  hardware_version?: string;
  firmware_version?: string;
  tsl_version?: string;
  sn?: string;
  lorawan_class?: string;
  reset_event?: any; // usa el tipo real si sabes cuál es el resultado de readResetEvent
  device_status?: any; // usa el tipo real si sabes cuál es el resultado de readOnOffStatus
  battery?: number;

  // // GPIO dinámicos: gpio_1, gpio_2, etc.
  // [key: `gpio_${number}`]: any;

  // // GPIO counters: counter_1, counter_2, etc.
  // [key: `counter_${number}`]: number;

  // // ADC dinámicos: adc_1, adc_1_min, adc_1_max, adc_1_avg, etc.
  // [key: `adc_${number}`]: number;
  // [key: `adc_${number}_min`]: number;
  // [key: `adc_${number}_max`]: number;
  // [key: `adc_${number}_avg`]: number;
  // [key: `adc_${number}_alarm`]: any;

  // // Modbus dinámicos: chn_1, modbus_chn_1, etc.
  // [key: `chn_${number}`]: any;
  // [key: `chn_${number}_alarm`]: any;
  // [key: `modbus_chn_${number}`]: any;
  // [key: `modbus_chn_${number}_alarm`]: string;

  // // SDI-12 dinámicos: sdi12_1, sdi12_2, etc.
  // [key: `sdi12_${number}`]: string;

  // History array: cada item puede tener estructura específica.
  history?: Array<Record<string, any>>;

  // Por si bajan otras claves dinámicas
  [key: string]: any;
}

export interface DownlinkResponse {
  collection_interval?: number;
  report_interval?: number;
  reboot?: any; // Ajustá según lo que devuelva readYesNoStatus
  timestamp?: number;
  timezone?: number;
  clear_history?: any; // Ajustá según lo que devuelva readYesNoStatus
  report_status?: any;
  history_enable?: any; // Ajustá según lo que devuelva readEnableStatus
  retransmit_enable?: any;
  retransmit_interval?: number;
  resend_interval?: number;
}

export interface HandleDownlinkResponseResult {
  data: DownlinkResponse;
  offset: number;
}
