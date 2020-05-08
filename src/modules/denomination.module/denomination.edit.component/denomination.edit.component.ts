import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DenominationService} from '../shared/services/denomination.service';
import {DenominationRequest} from '../shared/entities/denomination.request';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-denomination-edit',
  templateUrl: './denomination.edit.component.html',
  styleUrls: ['./denomination.edit.component.css']
})
export class DenominationEditComponent implements OnInit {
  denominationForm: FormGroup;
  currentDenominationId: number;
  fallido = false;
  success = false;

  constructor(private tokenVerificator: TokenVerificator,
              private denominationService: DenominationService,
              private currentRoute: ActivatedRoute,
              private router: Router) {
    this.tokenVerificator.verifyTokenValidity();

    this.denominationForm = new FormGroup({
      code: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      currency: new FormControl(0, [Validators.required,
        Validators.min(0), Validators.max(3)]),
      bankNote: new FormControl(true, [Validators.required]),
      newSeries: new FormControl(true, [Validators.required]),
      unitsPerContainer: new FormControl(0, [Validators.required, Validators.min(0)]),
      value: new FormControl(0, [Validators.required, Validators.min(0)])
    });
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe(routeResponse => {
      this.denominationService.findDenominationById(routeResponse.id).subscribe(denominationResponse => {
        this.currentDenominationId = denominationResponse.id;
        this.denominationForm
          .patchValue({bankNote: denominationResponse.bankNote,
            name: denominationResponse.name,
            code: denominationResponse.code,
            currency: denominationResponse.currency,
            newSeries: denominationResponse.newSeries,
            unitsPerContainer: denominationResponse.unitsPerContainer,
            value: denominationResponse.value
          });
      });
    })
  }

  submitForm() {
    const denominationRequest: DenominationRequest = new DenominationRequest(
      this.denominationForm.value.code,
      this.denominationForm.value.name,
      this.denominationForm.value.currency,
      this.denominationForm.value.bankNote,
      this.denominationForm.value.newSeries,
      this.denominationForm.value.unitsPerContainer,
      this.denominationForm.value.value
    );

    this.denominationService.updateDenomination(this.currentDenominationId, denominationRequest).subscribe(response => {
      this.success = true;
      this.fallido = false;
    }, error => {
      this.success = false;
      this.fallido = true;
    });
  }
}
