import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {OfficeMovementRepository} from "../shared/services/office.movement.repository";

@Component({
  selector: 'office-movement-add-component',
  templateUrl: './office.movement.add.component.html',
  styleUrls: ['./office.movement.add.component.css']
})
export class OfficeMovementAddComponent implements OnInit {
  success: boolean;
  error: boolean;
  movementForm: FormGroup;

  constructor(private officeMovementRepository: OfficeMovementRepository) {
  }

  ngOnInit(): void {
    this.movementForm = new FormGroup({
      payrollNumber: new FormControl(),
      serviceNumber: new FormControl(),
      serviceDate: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
      employeeId: new FormControl(),
      movementType: new FormControl(),
      businessUnit: new FormControl(),
      serviceType: new FormControl(),
      currency: new FormControl(),
      mainVehicle: new FormControl(),
      secondaryVehicle: new FormControl(),
      valueType: new FormControl(),
      amountOfContainers: new FormControl(),
      declaredBankNotes: new FormControl(),
      declaredCoins: new FormControl(),
      declaredCash: new FormControl(),
      custody: new FormControl(),
      failed: new FormControl(),
      officeToOffice: new FormControl(),
      counted: new FormControl(),
      failureId: new FormControl(),
      originId: new FormControl(),
      destinationId: new FormControl()
    });
  }

  onPayrollNumberChange(evt){
    this.officeMovementRepository.verifyUniquenessOfIncomingMovement(evt.target.value)
      .subscribe(response => {
        if(response){
          alert('Por favor inserte un numero de planilla diferente');
          this.movementForm.patchValue({payrollNumber: ''});
        }
      });
  }

  compareDates(){
    const startTime = (<HTMLInputElement> document.getElementById('movementStartTime')).value;
    const endTime = (<HTMLInputElement> document.getElementById('movementEndTime')).value;

    let splitedStartTime;
    let splitedEndTime;

    let totalSecondsStartTime = 0;
    let totalSecondsEndTime = 0;

    if(startTime !== null) {
      splitedStartTime =  startTime.split(':');
      totalSecondsStartTime =
        parseInt(splitedStartTime[0], 10) * 3600 + parseInt(splitedStartTime[1], 10) * 60;
    }

    if(endTime !== null) {
      splitedEndTime   =  endTime.split(':');
      totalSecondsEndTime =
        parseInt(splitedEndTime[0], 10) * 3600 + parseInt(splitedEndTime[1], 10) * 60;
    }

    if(endTime && startTime && (totalSecondsEndTime <= totalSecondsStartTime)){
      this.movementForm.patchValue({startTime: null, endTime: null})
      alert('la hora de finalizacion debe ser mayor a la de inicio');
    }
  }
}
