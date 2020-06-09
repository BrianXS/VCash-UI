import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {EmployeesService} from '../shared/services/employees.service';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {Title} from '../shared/enums/title';
import {Rhesus} from '../shared/enums/rhesus';
import {BusinessUnit} from '../../vehicle.module/shared/enums/business.unit';
import {PersonalDocumentType} from '../../cashier.module/shared/enums/personal.document.type';
import {EmployeeStatus} from '../shared/enums/employee.status';
import {EmployeeRequest} from '../shared/entities/employee.request';
import {BranchesServices} from '../../branch.module/shared/services/branch.service';
import {BranchResponse} from '../../branch.module/shared/entities/branch.response';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee.add.component.html',
  styleUrls: ['./employee.add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup;
  success: boolean;
  error: boolean;
  employeeStatus: CustomSelectItem[];
  documentTypes: CustomSelectItem[];
  branches: BranchResponse[];
  titles: CustomSelectItem[];
  rhesus: CustomSelectItem[];
  units: CustomSelectItem[];
  employeePicture: string;
  employeeSign: string;

  constructor(private tokenVerificator: TokenVerificator,
              private employeesService: EmployeesService,
              private branchesServices: BranchesServices,
              private enumToArray: EnumToArray) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      names: new FormControl(null, Validators.required),
      firstLastName: new FormControl(null, Validators.required),
      secondLastName: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      picture: new FormControl(null, Validators.required),
      sign: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      branchId: new FormControl(null, Validators.required),
      documentType: new FormControl(null, Validators.required),
      documentDetails: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.required),
      rhesus: new FormControl(null, Validators.required),
      from: new FormControl(null, Validators.required),
      unit: new FormControl(null, Validators.required),
    });

    this.branchesServices.getAllBranches().subscribe(response => {
      this.branches = response;
    });

    this.documentTypes  = this.enumToArray.convert(PersonalDocumentType);
    this.units  = this.enumToArray.convert(BusinessUnit);
    this.rhesus = this.enumToArray.convert(Rhesus);
    this.titles = this.enumToArray.convert(Title);
  }

  processFile(imageInput: any, typeOfPicture: boolean) {
    const reader = new FileReader();
    reader.readAsDataURL(imageInput.target.files[0]);

    reader.onload = () => {
      if (typeOfPicture) {
        this.employeePicture = reader.result.toString();
      } else {
        this.employeeSign = reader.result.toString();
      }
    };
  }

  onSubmit() {
    const employeeData = new EmployeeRequest(this.employeeForm.value.names,
      this.employeeForm.value.firstLastName,
      this.employeeForm.value.secondLastName,
      this.employeeForm.value.code,
      this.employeePicture,
      this.employeeSign,
      this.employeeForm.value.title,
      null,
      this.employeeForm.value.documentType,
      this.employeeForm.value.documentDetails,
      this.employeeForm.value.document,
      this.employeeForm.value.rhesus,
      this.employeeForm.value.from,
      '00-00-0000',
      EmployeeStatus.Active,
      this.employeeForm.value.unit);

    this.employeesService.createEmployee(employeeData).subscribe(vehicleResponse => {
      this.success = true;
      this.error = false;
      this.employeeForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
