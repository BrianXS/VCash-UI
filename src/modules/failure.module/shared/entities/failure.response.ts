export class FailureResponse {
  public id: number;
  public description: string;
  public clientFault: boolean;

  constructor()
  constructor(Id: number, Description: string, ClientFault: boolean)
  constructor(Id?: number, Description?: string, ClientFault?: boolean) {
    this.id = Id;
    this.description = Description;
    this.clientFault = ClientFault;
  }
}
