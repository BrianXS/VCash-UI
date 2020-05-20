import {Brand} from '../enums/brand';
import {Mode} from '../enums/mode';

export class AtmRequest {
  public LocalizationCode: boolean;
  public Emergency: boolean;
  public MaxValue: number;
  public Brand: Brand;
  public Mode: Mode;
  public From: Date;
  public OfficeId: number;
  public AtmBatteryId?: number;
  public DrawerRangeId?: number;


  constructor(LocalizationCode: boolean,
              Emergency: boolean,
              MaxValue: number,
              brand: Brand,
              mode: Mode,
              From: Date,
              OfficeId: number,
              AtmBatteryId: number,
              DrawerRangeId: number) {
    this.LocalizationCode = LocalizationCode;
    this.Emergency = Emergency;
    this.MaxValue = MaxValue;
    this.Brand = brand;
    this.Mode = mode;
    this.From = From;
    this.OfficeId = OfficeId;
    this.AtmBatteryId = AtmBatteryId;
    this.DrawerRangeId = DrawerRangeId;
  }
}
