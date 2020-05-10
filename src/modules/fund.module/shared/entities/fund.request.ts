export class FundRequest {
  public CustomerId: number;
  public OfficeId: number;

  constructor(CustomerId: number, OfficeId: number) {
    this.CustomerId = CustomerId;
    this.OfficeId = OfficeId;
  }
}
