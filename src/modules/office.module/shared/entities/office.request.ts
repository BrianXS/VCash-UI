import {Coverage} from '../enums/Coverage';
import {OfficeType} from '../enums/OfficeType';

export class OfficeRequest {
  public CustomerId: number;

  public VatcoCode: string;
  public ClientCode: string;

  public Name: string;
  public Address: string;
  public Phone: string;
  public Coverage: Coverage;
  public OfficeType: OfficeType;
  public Lat: number;
  public Lng: number;

  public From: Date;
  public Until: Date;

  public HasKits: boolean;
  public HasKeys: boolean;
  public HasEnvelopes: boolean;
  public HasCheques: boolean;
  public HasDocuments: boolean;

  public IsFund: boolean;

  public Manager: string;
  public ManagerDetails: string;
  public ManagerEmail: string;

  public CityId: number;
  public BusinessTypeId?: number;

  constructor(CustomerId?: number,
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
              BusinessTypeId?: number) {
    this.CustomerId = CustomerId;
    this.VatcoCode = VatcoCode;
    this.ClientCode = ClientCode;
    this.Name = Name;
    this.Address = Address;
    this.Phone = Phone;
    this.Coverage = Coverage;
    this.OfficeType = OfficeType;
    this.Lat = Lat;
    this.Lng = Lng;
    this.From = From;
    this.Until = Until;
    this.HasKits = HasKits;
    this.HasKeys = HasKeys;
    this.HasEnvelopes = HasEnvelopes;
    this.HasCheques = HasCheques;
    this.HasDocuments = HasDocuments;
    this.IsFund = IsFund;
    this.Manager = Manager;
    this.ManagerDetails = ManagerDetails;
    this.ManagerEmail = ManagerEmail;
    this.CityId = CityId;
    this.BusinessTypeId = BusinessTypeId;
  }
}
