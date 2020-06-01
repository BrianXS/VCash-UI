import {Component, OnInit} from '@angular/core';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DenominationService} from '../shared/services/denomination.service';
import {DenominationRequest} from '../shared/entities/denomination.request';
import {EnumToArray} from '../../app.module/shared/services/enum.to.array';
import {CustomSelectItem} from '../../app.module/shared/entities/custom.select.item';
import {Currency} from '../../drawer.range.module/shared/enums/currency';


@Component({
  selector: 'app-denomination-form',
  templateUrl: './denomination.form.component.html',
  styleUrls: ['./denomination.form.component.css']
})
export class DenominationFormComponent implements OnInit {
  denominationForm: FormGroup;
  currencies: CustomSelectItem[];
  fallido = false;
  success = false;

  constructor(private tokenVerificator: TokenVerificator,
              private denominationService: DenominationService,
              private enumToArray: EnumToArray) {
    this.tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
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

    this.currencies = this.enumToArray.convert(Currency);
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

    this.denominationService.createDenomination(denominationRequest).subscribe(response => {
      this.denominationForm.reset();
      this.success = true;
      this.fallido = false;
    }, error => {
      this.success = false;
      this.fallido = true;
    });
  }
}
