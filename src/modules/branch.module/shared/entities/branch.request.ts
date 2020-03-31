export class BranchRequest {
  public Name: string;
  public Code: string;
  public Lat: number;
  public Lng: number;

  constructor(Name?: string, Code?: string, Lat?: number, Lng?: number) {
    this.Name = Name;
    this.Code = Code;
    this.Lat = Lat;
    this.Lng = Lng;
  }
}
