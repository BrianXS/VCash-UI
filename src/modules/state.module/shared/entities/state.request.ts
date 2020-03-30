export class StateRequest {
  public Name: string;
  public CountryId: string;

  constructor(Name?: string, CountryId?: string) {
    this.Name = Name;
    this.CountryId = CountryId;
  }
}
