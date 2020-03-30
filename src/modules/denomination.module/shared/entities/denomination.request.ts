export class DenominationRequest {
  public Code: string;
  public Name: string;
  public Currency: number;
  public BankNote: boolean;
  public NewSeries: boolean;
  public UnitsPerContainer: number;
  public Value: number;

  constructor()
  constructor(Code: string,
              Name: string,
              Currency: number,
              BankNote: boolean,
              NewSeries: boolean,
              UnitsPerContainer: number,
              Value: number)
  constructor(Code?: string,
              Name?: string,
              Currency?: number,
              BankNote?: boolean,
              NewSeries?: boolean,
              UnitsPerContainer?: number,
              Value?: number) {

    this.Code = Code;
    this.Name = Name;
    this.Currency = Currency;
    this.BankNote = BankNote;
    this.NewSeries = NewSeries;
    this.UnitsPerContainer = UnitsPerContainer;
    this.Value = Value;
  }
}
