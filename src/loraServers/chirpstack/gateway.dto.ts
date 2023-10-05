export interface IGatewayChirpstackById {
  _id: string;

  createdAt?: Date;
  firstSeenAt?: Date;
  gateway?: IGatewayDetalles;
  lastSeenAt?: Date;
  updatedAt?: Date;
}

export interface IGatewayDetalles {
  boards?: IBoard[];
  description?: string;
  discoveryEnabled?: boolean;
  gatewayProfileID?: string;
  id?: string;
  location?: Location;
  metadata?: IMetadata;
  name?: string;
  networkServerID?: string;
  organizationID?: string;
  serviceProfileID?: string;
  tags?: IMetadata;
}

export interface IBoard {
  fineTimestampKey?: string;
  fpgaID?: string;
}

export interface IMetadata {}
