import {BusinessUnit} from '../enums/business.unit';
import {VehicleType} from '../enums/vehicle.type';

export class VehicleRequest {
  public Model: string;
  public Plate: string;
  public Color: string;
  public BranchId: number;

  public Code: string;
  public GpsCode: string;

  public BusinessUnit: BusinessUnit;
  public VehicleType: VehicleType;

  public AllowedAmmount: number;

  constructor(model: string,
              plate: string,
              color: string,
              branchId: number,
              code: string,
              gpsCode: string,
              businessUnit: BusinessUnit,
              vehicleType: VehicleType,
              allowedAmmount: number) {
    this.Model = model;
    this.Plate = plate;
    this.Color = color;
    this.BranchId = branchId;
    this.Code = code;
    this.GpsCode = gpsCode;
    this.BusinessUnit = businessUnit;
    this.VehicleType = vehicleType;
    this.AllowedAmmount = allowedAmmount;
  }
}
