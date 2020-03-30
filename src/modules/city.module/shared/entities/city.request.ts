export class CityRequest {
  public Name: string;
  public Code: string;

  constructor(Name?: string, Code?: string) {
    this.Name = Name;
    this.Code = Code;
  }
}
