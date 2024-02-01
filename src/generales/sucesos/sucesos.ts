export interface ISucesoPesaje {
  fecha?: string;
  valor?: number;
  notas?: string;
}

export interface ISucesoVacunacion {
  fecha?: string;
  vacuna?: string;
  dosis?: number;
  notas?: string;
}

export interface ISucesoDiagnostico {
  fecha?: string;
  enfermedad?: string;
  tratamiento?: string;
  notas?: string;
}

export interface ISucesoTratamiento {
  fecha?: string;
  tratamiento?: string;
  dosis?: number;
  notas?: string;
}
