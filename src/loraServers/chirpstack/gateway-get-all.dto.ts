export interface IGatewayChirpstackGetAll {
  //
  _id: string;
  // Lo que trae de Chirpstack
  createdAt?: string;
  description?: string;
  firstSeenAt?: string;
  id?: string;
  lastSeenAt?: string;
  location?: Location;
  name?: string;
  networkServerID?: string;
  networkServerName?: string;
  organizationID?: string;
  updatedAt?: string;
}

type Omitir = '_id';

export interface ICreateGatewayChirpstack
  extends Omit<Partial<IGatewayChirpstackGetAll>, Omitir> {}

export interface IUpdateGatewayChirpstack
  extends Omit<Partial<IGatewayChirpstackGetAll>, Omitir> {}

export interface Location {
  accuracy?: number;
  altitude?: number;
  latitude?: number;
  longitude?: number;
  source?: string;
}
