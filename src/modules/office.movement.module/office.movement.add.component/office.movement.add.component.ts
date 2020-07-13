import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OfficeMovementRepository} from '../shared/services/office.movement.repository';
import {VehiclesService} from '../../vehicle.module/shared/services/vehicles.service';
import {VehicleResponse} from '../../vehicle.module/shared/entities/vehicle.response';
import {EmployeesService} from '../../employee.module/shared/services/employees.service';
import {EmployeeResponse} from '../../employee.module/shared/entities/employee.response';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {Currency} from '../../drawer.range.module/shared/enums/currency';
import {BusinessUnit} from '../../vehicle.module/shared/enums/business.unit';
import {MovementType} from '../shared/enum/movement.type';
import {ServiceType} from '../shared/enum/service.type';
import {CustomersService} from '../../customer.module/shared/services/customers.service';
import {CustomerResponse} from '../../customer.module/shared/entities/customer.response';
import {OfficeResponse} from '../../office.module/shared/entities/office.response';
import {OfficeService} from '../../office.module/shared/services/office.service';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {ValueType} from "../shared/enum/value.type";
import {Coverage} from "../../office.module/shared/enums/Coverage";
import {OfficeMovementRequest} from "../shared/entities/office.movement.request";

@Component({
  selector: 'office-movement-add-component',
  templateUrl: './office.movement.add.component.html',
  styleUrls: ['./office.movement.add.component.css']
})
export class OfficeMovementAddComponent implements OnInit {
  movementForm: FormGroup;
  success: boolean;
  error: boolean;

  employees: EmployeeResponse[];
  customers: CustomerResponse[];
  vehicles: VehicleResponse[];
  branches: BranchResponse[];
  offices: OfficeResponse[];
  funds: OfficeResponse[];

  businessUnits: CustomSelectItem[];
  movementTypes: CustomSelectItem[];
  serviceTypes: CustomSelectItem[];
  currencies: CustomSelectItem[];
  valuetypes: CustomSelectItem[];
  coverages: CustomSelectItem[];

  constructor(private officeMovementRepository: OfficeMovementRepository,
              private vehiclesService: VehiclesService,
              private employeesService: EmployeesService,
              private customersService: CustomersService,
              private officeService: OfficeService,
              private branchesService: BranchesServices,
              private enumToArray: EnumToArray) {
  }

  ngOnInit(): void {
    this.movementForm = new FormGroup({
      payrollNumber: new FormControl(null, [Validators.required]),
      serviceNumber: new FormControl(null, [Validators.required]),
      branchId: new FormControl(null, [Validators.required]),
      serviceDate: new FormControl(null, [Validators.required]),
      startTime: new FormControl(null, [Validators.required]),
      endTime: new FormControl(null, [Validators.required]),
      employeeId: new FormControl(null, [Validators.required]),
      movementType: new FormControl(null, [Validators.required]),
      businessUnit: new FormControl(null, [Validators.required]),
      serviceType: new FormControl(null, [Validators.required]),
      currency: new FormControl(0, [Validators.required]),
      mainVehicle: new FormControl(null, [Validators.required]),
      secondaryVehicle: new FormControl(null),
      custody: new FormControl(),
      failed: new FormControl(),
      officeToOffice: new FormControl(),
      clientOriginId: new FormControl(),
      clientDestinationId: new FormControl({value: null, disabled: true}),
      originId: new FormControl(null, [Validators.required]),
      destinationId: new FormControl(null, [Validators.required]),
      valueType: new FormControl({value: null}, [Validators.required]),
      coverage: new FormControl({value: null, disabled: true}),
      declaredBankNotes: new FormControl(null, [Validators.required]),
      declaredCoins: new FormControl(null, [Validators.required]),
      declaredCash: new FormControl(null),
      amountOfContainers: new FormControl(null, [Validators.required]),
      counted: new FormControl(),
      failureId: new FormControl()
    });

    this.customersService.getAllCustomersWithoutRelationships().subscribe(response => {
      this.customers = response;
    });
    this.vehiclesService.getAllVehicles().subscribe(response => {
      this.vehicles = response;
    });
    this.employeesService.getAllEmployees().subscribe(response => {
      response.map(x => {
        x.names = `${x.names} ${x.firstLastName} ${x.secondLastName}`;
      });
      this.employees = response;
    });
    this.branchesService.getAllUserBranches().subscribe(response => {
      this.branches = response;
    });
    this.businessUnits = this.enumToArray.convert(BusinessUnit);
    this.movementTypes = this.enumToArray.convert(MovementType);
    this.serviceTypes = this.enumToArray.convert(ServiceType);
    this.currencies = this.enumToArray.convert(Currency);
    this.valuetypes = this.enumToArray.convert(ValueType);
    this.coverages = this.enumToArray.convert(Coverage);
  }

  onSucursalSelected() {
    const clientOriginId = parseInt(this.movementForm.value.clientOriginId, 10);
    const branch = parseInt(this.movementForm.value.branchId, 10);
    const currency = parseInt(this.movementForm.value.currency, 10);

    if (!isNaN(clientOriginId) && !isNaN(branch) && !isNaN(currency)) {
      this.movementForm.controls.originId.reset();
      this.officeService
        .findOfficeByClientIdAndBranchId(clientOriginId, branch)
        .subscribe(response => {
          this.offices = response;
        });
    } else {
      this.movementForm.controls.clientDestinationId.reset();
      this.movementForm.controls.clientOriginId.reset();
      this.movementForm.controls.originId.reset();
    }
  }
  onPayrollNumberChange(evt) {
    this.officeMovementRepository.verifyUniquenessOfIncomingMovement(evt.target.value)
      .subscribe(response => {
        if (response) {
          alert('Por favor inserte un numero de planilla diferente');
          this.movementForm.patchValue({payrollNumber: ''});
        }
      });
  }
  compareDates() {
    const startTime = (document.getElementById('movementStartTime') as HTMLInputElement).value;
    const endTime = (document.getElementById('movementEndTime') as HTMLInputElement).value;

    let splitedStartTime;
    let splitedEndTime;

    let totalSecondsStartTime = 0;
    let totalSecondsEndTime = 0;

    if (startTime !== null) {
      splitedStartTime =  startTime.split(':');
      totalSecondsStartTime =
        parseInt(splitedStartTime[0], 10) * 3600 + parseInt(splitedStartTime[1], 10) * 60;
    }

    if (endTime !== null) {
      splitedEndTime   =  endTime.split(':');
      totalSecondsEndTime =
        parseInt(splitedEndTime[0], 10) * 3600 + parseInt(splitedEndTime[1], 10) * 60;
    }

    if (endTime && startTime && (totalSecondsEndTime <= totalSecondsStartTime)) {
      this.movementForm.patchValue({startTime: null, endTime: null});
      alert('la hora de finalizacion debe ser mayor a la de inicio');
    }
  }
  onCustodySelected() {
    if (this.movementForm.value.custody) {
      this.movementForm.patchValue({
        failed: false,
        officeToOffice: false
      });
      this.movementForm.controls.failed.disable();
      this.movementForm.controls.officeToOffice.disable();
    } else {
      this.movementForm.controls.failed.enable();
      this.movementForm.controls.officeToOffice.enable();
    }
  }
  onFailureSelected() {
    if (this.movementForm.value.failed) {
      this.movementForm.patchValue({
        custody: false,
        officeToOffice: false
      });
      this.movementForm.controls.custody.disable();
      this.movementForm.controls.officeToOffice.disable();
    } else {
      this.movementForm.controls.custody.enable();
      this.movementForm.controls.officeToOffice.enable();
    }
  }
  onOfficeToOfficeSelected() {
    if (this.movementForm.value.officeToOffice) {
      this.movementForm.patchValue({
        custody: false,
        failed: false
      });
      this.movementForm.controls.custody.disable();
      this.movementForm.controls.failed.disable();
    } else {
      this.movementForm.controls.custody.enable();
      this.movementForm.controls.failed.enable();
    }
  }
  onClientChange() {
    const clientOriginId = parseInt(this.movementForm.value.clientOriginId, 10);
    const branch = parseInt(this.movementForm.value.branchId, 10);
    const currency = parseInt(this.movementForm.value.currency, 10);

    this.movementForm.patchValue({clientDestinationId: clientOriginId});
    this.movementForm.controls.originId.reset();
    this.movementForm.controls.destinationId.reset();

    if (!isNaN(clientOriginId) && !isNaN(branch) && !isNaN(currency)) {
      this.officeService
        .findOfficeByClientIdAndBranchId(clientOriginId, branch)
        .subscribe(response => {
          this.offices = response;
        });

      this.officeService
        .findFundsByClientIdAndBranchId(clientOriginId, branch)
        .subscribe(response => {
          this.funds = response;
        });

    } else if (isNaN(branch) || isNaN(clientOriginId) || isNaN(currency)) {
      alert('Verifique que la sucursal, divisa y cliente hayan sidos seleccionados');

      this.valuetypes = this.enumToArray.convert(ValueType);
      this.valuetypes.forEach(x => x.disabled = true);

      this.movementForm.controls.clientDestinationId.reset();
      this.movementForm.controls.clientOriginId.reset();
      this.movementForm.controls.valueType.reset();
      this.movementForm.controls.originId.reset();

      this.offices = [];
      this.funds = [];
    } else {
      this.movementForm.controls.originId.reset();
      this.offices = [];
    }
  }
  onOfficeChange() {
    const currentOffice = this.offices.find(x => x.id == parseInt(this.movementForm.value.originId, 10));
    const valueTypeSubstitution = this.enumToArray.convert(ValueType);
    this.movementForm.controls.valueType.reset();
    this.movementForm.controls.coverage.reset();

    if(currentOffice != null && !currentOffice.hasDocuments){
      valueTypeSubstitution[3].disabled =  true;
    }

    if(currentOffice != null && !currentOffice.hasCheques){
      valueTypeSubstitution[2].disabled =  true;
    }

    if(currentOffice != null && !currentOffice.hasEnvelopes){
      valueTypeSubstitution[1].disabled =  true;
    }

    this.valuetypes = valueTypeSubstitution;

    (<HTMLInputElement>document.getElementById('originCity')).value =
      currentOffice != null ? currentOffice.city : '';

    this.movementForm.patchValue({coverage: currentOffice != null ? currentOffice.coverage : null});
  }
  onFundChange() {
    const currentFund = this.funds
      .find(x => x.id == parseInt(this.movementForm.value.destinationId, 10));

    (<HTMLInputElement>document.getElementById('destinationCity')).value =
      currentFund != null ? currentFund.city : '';
  }

  onSubmit() {
    const movementData = new OfficeMovementRequest();
  }
}
