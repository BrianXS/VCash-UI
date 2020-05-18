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
  public Prefix: string;
  public BusinessTypeId?: number;
}
