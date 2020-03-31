export class BranchResponse {
  public id: number;
  public name: string;
  public code: string;
  public lat: number;
  public lng: number;

  constructor(Id?: number, Name?: string, Code?: string, Lat?: number, Lng?: number) {
    this.id = Id;
    this.name = Name;
    this.code = Code;
    this.lat = Lat;
    this.lng = Lng;
  }
}
