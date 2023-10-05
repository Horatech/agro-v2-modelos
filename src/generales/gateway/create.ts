import { ICoordenadas } from '../../auxiliares/coordenadas';
import { IDatos } from './schema';
export interface ICrearGateway {
  gatewayEui?: string;
  ubicacion?: ICoordenadas;
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
