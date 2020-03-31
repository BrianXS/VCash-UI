import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {BranchesServices} from '../shared/services/branch.service';
import {StatesService} from '../../state.module/shared/services/statesService';
import {CountriesService} from '../../country.module/shared/services/countries.service';
import {BranchResponse} from '../shared/entities/branch.response';
import {CountryResponse} from '../../country.module/shared/entities/country.response';
import {StateResponse} from '../../state.module/shared/entities/state.response';
import {BranchRequest} from '../shared/entities/branch.request';
declare var jQuery: any;

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch.form.component.html',
  styleUrls: ['./branch.form.component.css']
})
export class BranchFormComponent implements OnInit {
  branchForm: FormGroup;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator, private branchesServices: BranchesServices) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.branchForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      lat: new FormControl(null, Validators.required),
      lng: new FormControl(null, Validators.required)
    });
  }

  submitForm() {
    const branchData = new BranchRequest(this.branchForm.value.name,
      this.branchForm.value.code,
      this.branchForm.value.lat,
      this.branchForm.value.lng);

    console.log(branchData)

    this.branchesServices.createBranch(branchData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.branchForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
