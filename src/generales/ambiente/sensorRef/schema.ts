// tipos de sensores que puede tener un ambiente
export interface ISensorRef {
    sensorId: string;
    tipo: 'SensorHumedadSuelo' | 'Pluviometro' | 'EstacionMeteorologica' | 'Freatimetro';
}