export class CountryResponse {
  public id: number;
  public name: string;
  public code: string;

  constructor(Id?: number, Name?: string, Code?: string) {
    this.id = Id;
    this.name = Name;
    this.code = Code;
  }
}
