import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'sd-matstepper',
  templateUrl: '../stepper/stepper.component.html'
})
export class Mat2StepperComponent implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
  
    constructor(private _formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
}

