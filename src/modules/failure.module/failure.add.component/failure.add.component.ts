import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FailureRequest} from '../shared/entities/failure.request';
import {FailuresService} from '../shared/services/failures.service';


@Component({
  selector: 'app-failure-add',
  templateUrl: './failure.add.component.html',
  styleUrls: ['./failure.add.component.css']
})
export class FailureAddComponent implements OnInit {
  failureForm: FormGroup;
  fallido = false;
  success = false;

  constructor(private tokenVerificator: TokenVerificator, private failuresService: FailuresService) {
    this.tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.failureForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      clientFault: new FormControl(false, Validators.required)
    });
  }

  submitForm() {
    const failureData: FailureRequest = new FailureRequest(this.failureForm.value.description,
      this.failureForm.value.clientFault);

    this.failuresService.addFailure(failureData).subscribe(response => {
      this.failureForm.reset();
      this.success = true;
      this.fallido = false;
    }, error => {
      this.success = false;
      this.fallido = true;
    });
  }
}
