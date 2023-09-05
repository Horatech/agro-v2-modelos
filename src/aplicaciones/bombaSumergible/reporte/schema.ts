export interface IReporteBombaSumergible {
  estado?: "Encendido" | "Apagado";
  modoOperacion?: "Started" | "Tripped 1" | "Tripped 2" | "Tripped 3";
  corrienteFaseR?: number;
  corrienteFaseS?: number;
  corrienteFaseT?: number;
  tensionFaseRS?: number;
  tensionFaseST?: number;
  tensionFaseTR?: number;
}
