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
import {ActivatedRoute, Router} from "@angular/router";
declare var jQuery: any;

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch.edit.component.html',
  styleUrls: ['./branch.edit.component.css']
})
export class BranchEditComponent implements OnInit {
  branchForm: FormGroup;
  currentBranchId: number;
  success: boolean;
  error: boolean;

  constructor(private tokenVerificator: TokenVerificator,
              private branchesServices: BranchesServices,
              private currentRoute: ActivatedRoute,
              private router: Router) {
    tokenVerificator.verifyTokenValidity();

    this.branchForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, Validators.required),
      lat: new FormControl(null, Validators.required),
      lng: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe( response => {
      this.branchesServices.findBranchById(response.id).subscribe(branchResponse => {
        this.currentBranchId = branchResponse.id;
        this.branchForm
          .patchValue({name: branchResponse.name,
            code: branchResponse.code,
            lat: branchResponse.lat,
            lng: branchResponse.lng});
      }, error => {
        this.router.navigate(['/home', 'branches']);
      });
    });
  }

  submitForm() {
    const branchData = new BranchRequest(this.branchForm.value.name,
      this.branchForm.value.code,
      this.branchForm.value.lat,
      this.branchForm.value.lng);

    this.branchesServices.updateBranch(this.currentBranchId, branchData).subscribe(response => {
      this.success = true;
      this.error = false;
      this.branchForm.reset();
    }, error => {
      this.success = false;
      this.error = true;
    });
  }
}
