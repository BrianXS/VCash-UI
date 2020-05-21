import {DrawerType} from '../enums/drawer.type';
import {DrawerFunction} from '../enums/drawer.function';


export class DrawerRequest {
  public MaxValue: number;
  public DefaultQuantity: number;
  public DrawerType: DrawerType;
  public DrawerFunction: DrawerFunction;
  public DrawerRangeId: number;
  public DenominationTypeId: number;


  constructor(MaxValue: number,
              DefaultQuantity: number,
              drawerType: DrawerType,
              drawerFunction: DrawerFunction,
              DrawerRangeId: number,
              DenominationTypeId: number) {
    this.MaxValue = MaxValue;
    this.DefaultQuantity = DefaultQuantity;
    this.DrawerType = drawerType;
    this.DrawerFunction = drawerFunction;
    this.DrawerRangeId = DrawerRangeId;
    this.DenominationTypeId = DenominationTypeId;
  }
}

