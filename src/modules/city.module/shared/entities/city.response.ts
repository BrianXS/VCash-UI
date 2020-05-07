export class CityResponse {
  public id: number;
  public name: string;
  public state: string;
  public stateId: number;
  public branch: string;
  public branchId: number;
  public country: string;
  public countryId: number;


  constructor(id?: number,
              name?: string,
              state?: string,
              stateId?: number,
              branch?: string,
              branchId?: number,
              country?: string,
              countryId?: number) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.stateId = stateId;
    this.branch = branch;
    this.branchId = branchId;
    this.country = country;
    this.countryId = countryId;
  }
}
