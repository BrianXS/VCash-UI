import {Brand} from '../enums/brand';
import {Mode} from '../enums/mode';

export class AtmResponse {
  public id: number;

  public localizationCode: boolean;
  public emergency: boolean;
  public maxValue: number;
  public brand: Brand;
  public mode: Mode;

  public from: Date;

  public officeId: number;
  public office: string;

  public atmBatteryId?: number;
  public atmBattery: string;

  public drawerRangeId?: number;
  public drawerRange: string;


  constructor(id?: number,
              localizationCode?: boolean,
              emergency?: boolean,
              maxValue?: number,
              brand?: Brand,
              mode?: Mode,
              from?: Date,
              officeId?: number,
              office?: string,
              atmBatteryId?: number,
              atmBattery?: string,
              drawerRangeId?: number,
              drawerRange?: string) {
    this.id = id;
    this.localizationCode = localizationCode;
    this.emergency = emergency;
    this.maxValue = maxValue;
    this.brand = brand;
    this.mode = mode;
    this.from = from;
    this.officeId = officeId;
    this.office = office;
    this.atmBatteryId = atmBatteryId;
    this.atmBattery = atmBattery;
    this.drawerRangeId = drawerRangeId;
    this.drawerRange = drawerRange;
  }
}
