import { ICoordenadas } from '../../auxiliares/coordenadas';

export interface IGateway {
  _id: string;
  gatewayEui: string;
  ubicacion: ICoordenadas;
  // GEOJSON
  // https://www.mongodb.com/docs/manual/reference/geojson/
  // type es el tipo de objeto a guardar
  //  Point LineString  Polygon  MultiPoint  MultiLineString  MultiPolygon  GeometryCollection
  geojson?: {
    type: 'Point';
    coordinates: [number, number];
  };
  datos?: IDatos;
}

export interface IDatos {
  nombre?: string;
  descripcion?: string;
  credenciales?: {
    usuario?: string;
    password?: string;
  };
  // Por las dudas
  notas?: string;
}
