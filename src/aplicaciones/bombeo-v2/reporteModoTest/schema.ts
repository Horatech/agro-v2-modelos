export interface IReporteModoTest {
  fecha: string;
  canales: {
    entrada: "sin_canal" | "ok" | "error_comunicacion" | "error_lectura";
    salida: "sin_canal" | "ok" | "error_comunicacion" | "error_lectura";
  };
  bombas: {
    [numero: number]: "sin_bomba" | "ok" | "error_comunicacion" | "error_bomba";
  };
  resumen: {
    canalesOk: number;
    canalesError: number;
    bombasOk: number;
    bombasError: number;
    totalElementos: number;
  };
}
