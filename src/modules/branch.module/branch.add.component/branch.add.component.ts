import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {BranchesServices} from '../shared/services/branch.service';
import {BranchRequest} from '../shared/entities/branch.request';
declare var jQuery: any;

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch.add.component.html',
  styleUrls: ['./branch.add.component.css']
})
export class BranchAddComponent implements OnInit {
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
