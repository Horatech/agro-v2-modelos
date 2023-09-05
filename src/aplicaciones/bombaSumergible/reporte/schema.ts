export interface IReporteBombaSumergible {
  estado?: "Encendido" | "Apagado";
  corrienteFaseR?: number;
  corrienteFaseS?: number;
  corrienteFaseT?: number;
  tensionFaseRS?: number;
  tensionFaseST?: number;
  tensionFaseTR?: number;
}
