export enum TipoDespesa{
  ALIMENTACAO = 'Alimentação',
  LIMPEZA = 'Limpeza',
  LAZER = 'Lazer',
  TRANSPORTE = 'Transporte',
  PET = 'Pet',
  JARDIM = 'Jardim',
  OUTRO = 'Outro'
}
export class Despesa{
  motivo: string;
  valor: number;
  tipo: string;
  data: string;
  constructor() {
    this.motivo = '';
    this.valor = 0;
    this.tipo = TipoDespesa.OUTRO;
    this.data = new Date().toISOString();
  }
}
