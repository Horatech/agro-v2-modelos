export interface IAck {
  // aplicacion: string;
  // idCliente: string;
  // red: string;
  deveui: string;
  deviceName: string;
  acknowledged: boolean;
  fCnt: string;
  tags?: { [key: string]: string };
}
