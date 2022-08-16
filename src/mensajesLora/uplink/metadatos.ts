export interface IMetadatos {
  gatewayID?: string;
  timestamp?: string;
  rssi?: number;
  snr?: number;
  location?: {
    altitude: number;
    latitude: number;
    longitude: number;
  };
}
