import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FailureRequest} from '../shared/entities/failure.request';
import {FailuresService} from '../shared/services/failures.service';


@Component({
  selector: 'app-failure-edit',
  templateUrl: './failure.edit.component.html',
  styleUrls: ['./failure.edit.component.css']
})
export class FailureEditComponent implements OnInit {
  currentFailureId: number;
  failureForm: FormGroup;
  fallido = false;
  success = false;

  constructor(private tokenVerificator: TokenVerificator,
              private failuresService: FailuresService,
              private currentRoute: ActivatedRoute,
              private router: Router) {
    this.tokenVerificator.verifyTokenValidity();

    this.failureForm = new FormGroup({
      description: new FormControl(null, Validators.required),
      clientFault: new FormControl(false, Validators.required)
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(response => {
      this.failuresService.findFailureById(response.id).subscribe( failureResponse => {
        this.currentFailureId = failureResponse.id;
        this.failureForm
          .patchValue({description: failureResponse.description, clientFault: failureResponse.clientFault});
      }, error => {
        this.router.navigate(['/home', 'failures']);
      });
    })
  }

  submitForm() {
    const failureData: FailureRequest = new FailureRequest(this.failureForm.value.description,
      this.failureForm.value.clientFault);
    this.failuresService.editFailure(this.currentFailureId, failureData).subscribe(response => {
      this.success = true;
      this.fallido = false;
    }, error => {
      this.success = false;
      this.fallido = true;
    });
  }
}
