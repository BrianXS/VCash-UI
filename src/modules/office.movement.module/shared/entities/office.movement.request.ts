import {Currency} from "../../../drawer.range.module/shared/enums/currency";
import {ValueType} from "../enum/value.type";
import {BusinessUnit} from "../../../vehicle.module/shared/enums/business.unit";
import {MovementType} from "../enum/movement.type";
import {ServiceType} from "../enum/service.type";

export class OfficeMovementRequest {
  public PayrollNumber: string;
  public ServiceNumber: string;
  public Currency: Currency;
  public ServiceDate: Date;
  public StartTime: string;
  public EndTime: string;
  public ServiceType: ServiceType;
  public MovementType: MovementType;
  public BusinessUnit: BusinessUnit;
  public ValueType: ValueType;
  public AmmountOfContainers: number;
  public DeclaredBankNotes: number;
  public DeclaredCoins: number;
  public DeclaredCash: number;
  public Failed: boolean;
  public Custody: boolean;
  public OfficeToOffice: boolean;
  public Counted: boolean;
  public FailureId: number;
  public OriginId: number;
  public DestinationId: number;
  public EmployeeId: number;
  public MainVehicleId: number;
  public SecondaryVehicleId: number;
  public GeneralNotification: string;


  constructor(PayrollNumber?: string,
              ServiceNumber?: string,
              Currency?: Currency,
              ServiceDate?: Date,
              StartTime?: string,
              EndTime?: string,
              ServiceType?: ServiceType,
              MovementType?: MovementType,
              BusinessUnit?: BusinessUnit,
              ValueType?: ValueType,
              AmmountOfContainers?: number,
              DeclaredBankNotes?: number,
              DeclaredCoins?: number,
              DeclaredCash?: number,
              Failed?: boolean,
              Custody?: boolean,
              OfficeToOffice?: boolean,
              Counted?: boolean,
              FailureId?: number,
              OriginId?: number,
              DestinationId?: number,
              EmployeeId?: number,
              MainVehicleId?: number,
              SecondaryVehicleId?: number,
              GeneralNotification?: string) {
    this.PayrollNumber = PayrollNumber;
    this.ServiceNumber = ServiceNumber;
    this.Currency = Currency;
    this.ServiceDate = ServiceDate;
    this.StartTime = StartTime;
    this.EndTime = EndTime;
    this.ServiceType = ServiceType;
    this.MovementType = MovementType;
    this.BusinessUnit = BusinessUnit;
    this.ValueType = ValueType;
    this.AmmountOfContainers = AmmountOfContainers;
    this.DeclaredBankNotes = DeclaredBankNotes;
    this.DeclaredCoins = DeclaredCoins;
    this.DeclaredCash = DeclaredCash;
    this.Failed = Failed;
    this.Custody = Custody;
    this.OfficeToOffice = OfficeToOffice;
    this.Counted = Counted;
    this.FailureId = FailureId;
    this.OriginId = OriginId;
    this.DestinationId = DestinationId;
    this.EmployeeId = EmployeeId;
    this.MainVehicleId = MainVehicleId;
    this.SecondaryVehicleId = SecondaryVehicleId;
    this.GeneralNotification = GeneralNotification;
  }
}
