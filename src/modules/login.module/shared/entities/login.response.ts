export class LoginResponse {
  public token: string;
  public refreshToken: string;
  public expirationDate: string;

  constructor()
  constructor(Token: string, RefreshToken: string, ExpirationDate: string)
  constructor(Token?: string, RefreshToken?: string, ExpirationDate?: string) {
    this.token = Token;
    this.refreshToken = RefreshToken;
    this.expirationDate = ExpirationDate;
  }
}
