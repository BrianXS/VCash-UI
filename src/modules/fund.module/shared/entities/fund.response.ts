export class FundResponse {
  public customerId: number;
  public customer: string;

  public officeId: number;
  public office: string;

  constructor(customerId: number, customer: string, officeId: number, office: string) {
    this.customerId = customerId;
    this.customer = customer;
    this.officeId = officeId;
    this.office = office;
  }
}
