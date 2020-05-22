import {DrawerType} from '../enums/drawer.type';
import {DrawerFunction} from '../enums/drawer.function';


export class DrawerRangeRequest {
  public Code: string;
  public Currency: Currency;
  public CustomerId: number;

  constructor(Code: string, currency: Currency, CustomerId: number) {
    this.Code = Code;
    this.Currency = currency;
    this.CustomerId = CustomerId;
  }
}

export enum Currency {

}

