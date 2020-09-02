export interface Preventa {
  nombreProyecto: string;
  cuentaAnalitica: string;
  cliente: string;
  costo: number;
  fechaInicio: string;
  fechaFin: string;
  fechaCierre: string;
  porcentaje: number;
  ingresos: number;
  gerenteComercial: string;
  comercial: string;
  equipoVenta: string;
  compania: string;
  lineaNegocio: string;
  tipoServicio: string;
  sede: string;
  etiquetaAnaliticas: string;
  tipoMoneda: string;
  participacion: number;
  objetivo: string;
}

export interface Generica {
  label?: string;
  code?: number;
}
