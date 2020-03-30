export class DenominationResponse {
  public id: number;
  public code: string;
  public name: string;
  public currency: number;
  public bankNote: boolean;
  public newSeries: boolean;
  public unitsPerContainer: number;
  public value: number;

  constructor()
  constructor(Id: number,
              Code: string,
              Name: string,
              Currency: number,
              BankNote: boolean,
              NewSeries: boolean,
              UnitsPerContainer: number,
              Value: number)
  constructor(Id?: number,
              Code?: string,
              Name?: string,
              Currency?: number,
              BankNote?: boolean,
              NewSeries?: boolean,
              UnitsPerContainer?: number,
              Value?: number) {
    this.id = Id;
    this.code = Code;
    this.name = Name;
    this.currency = Currency;
    this.bankNote = BankNote;
    this.newSeries = NewSeries;
    this.unitsPerContainer = UnitsPerContainer;
    this.value = Value;
  }
}
