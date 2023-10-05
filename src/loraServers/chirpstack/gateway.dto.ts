export interface IGatewayChirpstack {
  //
  _id: string;
  // Lo que trae de Chirpstack
  createdAt?: Date;
  description?: string;
  firstSeenAt?: Date;
  id?: string;
  lastSeenAt?: Date;
  location?: Location;
  name?: string;
  networkServerID?: string;
  networkServerName?: string;
  organizationID?: string;
  updatedAt?: Date;
}

type Omitir = '_id';

export interface ICreateGatewayChirpstack
  extends Omit<Partial<IGatewayChirpstack>, Omitir> {}

export interface IUpdateGatewayChirpstack
  extends Omit<Partial<IGatewayChirpstack>, Omitir> {}

export interface Location {
  accuracy?: number;
  altitude?: number;
  latitude?: number;
  longitude?: number;
  source?: string;
}
