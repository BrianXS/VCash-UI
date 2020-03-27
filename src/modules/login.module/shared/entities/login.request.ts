export class LoginRequest {
  public UserName: string;
  public Password: string;

  constructor()
  constructor(UserName: string, Password: string)
  constructor(UserName?: string, Password?: string) {
    this.UserName = UserName;
    this.Password = Password;
  }
}
