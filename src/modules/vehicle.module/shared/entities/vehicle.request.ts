import {BusinessUnit} from "../enums/business.unit";
import {VehicleType} from "../enums/vehicle.type";

export class VehicleRequest {
  public model: string;
  public plate: string;
  public color: string;
  public branchId: number;

  public code: string;
  public gpsCode: string;

  public businessUnit: BusinessUnit;
  public vehicleType: VehicleType;

  public allowedAmmount: number;


  constructor(model: string,
              plate: string,
              color: string,
              branchId: number,
              code: string,
              gpsCode: string,
              businessUnit: BusinessUnit,
              vehicleType: VehicleType,
              allowedAmmount: number) {
    this.model = model;
    this.plate = plate;
    this.color = color;
    this.branchId = branchId;
    this.code = code;
    this.gpsCode = gpsCode;
    this.businessUnit = businessUnit;
    this.vehicleType = vehicleType;
    this.allowedAmmount = allowedAmmount;
  }
}
