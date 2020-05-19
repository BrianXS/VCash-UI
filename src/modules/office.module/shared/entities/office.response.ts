import {Coverage} from '../enums/Coverage';
import {OfficeType} from '../enums/OfficeType';

export class OfficeResponse {
  public id: number;

  public customerId: number;
  public customer: string;

  public vatcoCode: string;
  public clientCode: string;

  public name: string;
  public address: string;
  public phone: string;
  public coverage: Coverage;
  public officeType: OfficeType;
  public lat: number;
  public lng: number;

  public from: Date;
  public until: Date;

  public hasKits: boolean;
  public hasKeys: boolean;
  public hasEnvelopes: boolean;
  public hasCheques: boolean;
  public hasDocuments: boolean;

  public isFund: boolean;

  public manager: string;
  public managerDetails: string;
  public managerEmail: string;

  public cityId: number;
  public city: string;

  public prefix: string;

  public businessTypeId?: number;
  public businessType: string;

  public active: boolean;


  constructor(Id?: number,
              CustomerId?: number,
              Customer?: string,
              VatcoCode?: string,
              ClientCode?: string,
              Name?: string,
              Address?: string,
              Phone?: string,
              Coverage?: Coverage,
              OfficeType?: OfficeType,
              Lat?: number,
              Lng?: number,
              From?: Date,
              Until?: Date,
              HasKits?: boolean,
              HasKeys?: boolean,
              HasEnvelopes?: boolean,
              HasCheques?: boolean,
              HasDocuments?: boolean,
              IsFund?: boolean,
              Manager?: string,
              ManagerDetails?: string,
              ManagerEmail?: string,
              CityId?: number,
              City?: string,
              Prefix?: string,
              BusinessTypeId?: number,
              BusinessType?: string,
              Active?: boolean) {
    this.id = Id;
    this.customerId = CustomerId;
    this.customer = Customer;
    this.vatcoCode = VatcoCode;
    this.clientCode = ClientCode;
    this.name = Name;
    this.address = Address;
    this.phone = Phone;
    this.coverage = Coverage;
    this.officeType = OfficeType;
    this.lat = Lat;
    this.lng = Lng;
    this.from = From;
    this.until = Until;
    this.hasKits = HasKits;
    this.hasKeys = HasKeys;
    this.hasEnvelopes = HasEnvelopes;
    this.hasCheques = HasCheques;
    this.hasDocuments = HasDocuments;
    this.isFund = IsFund;
    this.manager = Manager;
    this.managerDetails = ManagerDetails;
    this.managerEmail = ManagerEmail;
    this.cityId = CityId;
    this.city = City;
    this.prefix = Prefix;
    this.businessTypeId = BusinessTypeId;
    this.businessType = BusinessType;
    this.active = Active;
  }
}
