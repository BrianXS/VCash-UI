export class StateResponse {
  public id: number;
  public name: string;
  public country: string;
  public countryId: number;

  constructor(id?: number, name?: string, country?: string, countryId?: number) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.countryId = countryId;
  }
}
