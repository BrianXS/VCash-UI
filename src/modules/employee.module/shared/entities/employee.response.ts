import {PersonalDocumentType} from '../../../cashier.module/shared/enums/personal.document.type';
import {BusinessUnit} from 'src/modules/vehicle.module/shared/enums/business.unit';
import {EmployeeStatus} from '../enums/employee.status';
import {Rhesus} from '../enums/rhesus';
import {Title} from '../enums/title';

export class EmployeeResponse {
  public id: number;
  public names: string;
  public firstLastName: string;
  public secondLastName: string;
  public code: string;
  public picture: string;
  public sign: string;
  public title: Title;

  public branchId: number;
  public branch: string;

  public documentType: PersonalDocumentType;
  public documentDetails: string;
  public document: string;
  public rhesus: Rhesus;

  public from: Date;
  public until: Date;

  public employeeStatus: EmployeeStatus;
  public unit: BusinessUnit;

  constructor(id: number,
              names: string,
              firstLastName: string,
              secondLastName: string,
              code: string,
              picture: string,
              sign: string,
              title: Title,
              branchId: number,
              branch: string,
              documentType: PersonalDocumentType,
              documentDetails: string,
              document: string,
              rhesus: Rhesus,
              from: Date,
              until: Date,
              employeeStatus: EmployeeStatus,
              unit: BusinessUnit) {
    this.id = id;
    this.names = names;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.code = code;
    this.picture = picture;
    this.sign = sign;
    this.title = title;
    this.branchId = branchId;
    this.branch = branch;
    this.documentType = documentType;
    this.documentDetails = documentDetails;
    this.document = document;
    this.rhesus = rhesus;
    this.from = from;
    this.until = until;
    this.employeeStatus = employeeStatus;
    this.unit = unit;
  }
}
