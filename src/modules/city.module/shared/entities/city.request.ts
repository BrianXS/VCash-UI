export class CityRequest {
  public Name: string;
  public StateId: number;
  public BranchId: number;

  constructor(Name?: string, StateId?: number, BranchId?: number) {
    this.Name = Name;
    this.StateId = StateId;
    this.BranchId = BranchId;
  }
}
