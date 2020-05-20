export class BatteryResponse {
  public id: string;
  public code: string;
  public atms: string[];


  constructor(id?: string, code?: string, atms?: string[]) {
    this.id = id;
    this.code = code;
    this.atms = atms;
  }
}
