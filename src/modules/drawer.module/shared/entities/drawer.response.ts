import {DrawerType} from '../enums/drawer.type';
import {DrawerFunction} from '../enums/drawer.function';


export class DrawerResponse {
  public id: number;
  public maxValue: number;
  public defaultQuantity: number;

  public drawerType: DrawerType;
  public drawerFunction: DrawerFunction;

  public drawerRangeId: number;
  public drawerRange: string;

  public denominationTypeId: number;
  public denominationType: string;


  constructor(id: number,
              maxValue: number,
              defaultQuantity: number,
              drawerType: DrawerType,
              drawerFunction: DrawerFunction,
              drawerRangeId: number,
              drawerRange: string,
              denominationTypeId: number,
              denominationType: string) {
    this.id = id;
    this.maxValue = maxValue;
    this.defaultQuantity = defaultQuantity;
    this.drawerType = drawerType;
    this.drawerFunction = drawerFunction;
    this.drawerRangeId = drawerRangeId;
    this.drawerRange = drawerRange;
    this.denominationTypeId = denominationTypeId;
    this.denominationType = denominationType;
  }
}
