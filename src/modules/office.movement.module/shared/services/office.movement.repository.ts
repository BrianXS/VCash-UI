import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OfficeMovementRepository {
  constructor(private http: HttpClient) {
  }
  verifyUniquenessOfIncomingMovement(payrollNumber: string){
    return this.http.get(`OfficeMovements/Incoming/Verify/${payrollNumber}`);
  }
}
