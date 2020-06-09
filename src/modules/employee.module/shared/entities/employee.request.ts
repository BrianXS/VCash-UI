import {PersonalDocumentType} from '../../../cashier.module/shared/enums/personal.document.type';
import {BusinessUnit} from 'src/modules/vehicle.module/shared/enums/business.unit';
import {EmployeeStatus} from '../enums/employee.status';
import {Rhesus} from '../enums/rhesus';
import {Title} from '../enums/title';

export class EmployeeRequest {
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

  public From: string;
  public Until: string;

  public EmployeeStatus: EmployeeStatus;
  public Unit: BusinessUnit;


  constructor(Names: string,
              FirstLastName: string,
              SecondLastName: string,
              Code: string,
              Picture: string,
              Sign: string,
              title: Title,
              BranchId: number,
              DocumentType: PersonalDocumentType,
              DocumentDetails: string,
              Document: string,
              rhesus: Rhesus,
              From: string,
              Until: string,
              employeeStatus: EmployeeStatus,
              Unit: BusinessUnit) {
    this.Names = Names;
    this.FirstLastName = FirstLastName;
    this.SecondLastName = SecondLastName;
    this.Code = Code;
    this.Picture = Picture;
    this.Sign = Sign;
    this.Title = title;
    this.BranchId = BranchId;
    this.DocumentType = DocumentType;
    this.DocumentDetails = DocumentDetails;
    this.Document = Document;
    this.Rhesus = rhesus;
    this.From = From;
    this.Until = Until;
    this.EmployeeStatus = employeeStatus;
    this.Unit = Unit;
  }
}
