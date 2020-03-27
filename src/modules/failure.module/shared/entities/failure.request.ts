export class FailureRequest {
  public Description: string;
  public ClientFault: boolean;

  constructor()
  constructor(Description: string, ClientFault: boolean)
  constructor(Description?: string, ClientFault?: boolean) {
    this.Description = Description;
    this.ClientFault = ClientFault;
  }
}
