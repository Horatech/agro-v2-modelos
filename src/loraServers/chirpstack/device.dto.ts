export interface ICreateDeviceChirpstack {
  device: {
    applicationID: string;
    description: string;
    devEUI: string;
    deviceProfileID: string;
    isDisabled?: boolean;
    name: string;
    referenceAltitude?: number;
    skipFCntCheck?: boolean;
    tags?: Record<string, string>;
    variables?: Record<string, string>;
  };
}

export interface IGetDeviceChirpstack {
  device: {
    applicationID: string;
    description: string;
    devEUI: string;
    deviceProfileID: string;
    isDisabled?: boolean;
    name: string;
    referenceAltitude?: number;
    skipFCntCheck?: boolean;
    tags?: Record<string, string>;
    variables?: Record<string, string>;
  };
  deviceStatusBattery: number;
  deviceStatusMargin: number;
  lastSeenAt: string;
  location: any;
}
