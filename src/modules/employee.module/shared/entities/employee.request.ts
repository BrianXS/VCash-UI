import {PersonalDocumentType} from "../../../cashier.module/shared/enums/personal.document.type";
import {Title} from "../enums/title";
import {BusinessUnit} from 'src/modules/vehicle.module/shared/enums/business.unit';
import {Rhesus} from "../enums/rhesus";
import {EmployeeStatus} from "../enums/employee.status";

export class EmployeeRequest {
  public Id: number;
  public Names: string;
  public FirstLastName: string;
  public SecondLastName: string;
  public Code: string;
  public Picture: string;
  public Sign: string;
  public Title: Title;
  public BranchId: number;

  public DocumentType: PersonalDocumentType;
  public DocumentDetails: string;
  public Document: string;
  public Rhesus: Rhesus;

  public From: Date;
  public Until: Date;

  public EmployeeStatus: EmployeeStatus;
  public Unit: BusinessUnit;


  constructor(Id: number,
              Names: string,
              FirstLastName: string,
              SecondLastName: string,
              Code: string,
              Picture: string,
              Sign: string,
              Title: Title,
              BranchId: number,
              DocumentType: PersonalDocumentType,
              DocumentDetails: string,
              Document: string,
              Rhesus: Rhesus, From: Date,
              Until: Date,
              EmployeeStatus: EmployeeStatus,
              Unit: BusinessUnit) {
    this.Id = Id;
    this.Names = Names;
    this.FirstLastName = FirstLastName;
    this.SecondLastName = SecondLastName;
    this.Code = Code;
    this.Picture = Picture;
    this.Sign = Sign;
    this.Title = Title;
    this.BranchId = BranchId;
    this.DocumentType = DocumentType;
    this.DocumentDetails = DocumentDetails;
    this.Document = Document;
    this.Rhesus = Rhesus;
    this.From = From;
    this.Until = Until;
    this.EmployeeStatus = EmployeeStatus;
    this.Unit = Unit;
  }
}
