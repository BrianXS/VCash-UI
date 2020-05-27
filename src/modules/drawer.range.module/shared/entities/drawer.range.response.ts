import {Currency} from '../enums/currency';

export class DrawerRangeResponse {
  public id: number;
  public code: string;
  public currency: Currency;

  public customerId: number;
  public customer: string;
}
