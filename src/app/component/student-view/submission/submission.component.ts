import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;
  thirdFormGroup: FormGroup | undefined;
  forthFormGroup: FormGroup | undefined;

  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      fileControlName: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      fileControlName1: ['', Validators.required],
      fileControlName2: ['', Validators.required],
      fileControlName3: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      fileControlName1: ['', Validators.required],
      fileControlName2: ['', Validators.required],
      fileControlName3: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      fileControlName1: ['', Validators.required],
      fileControlName2: ['', Validators.required],
      fileControlName3: ['', Validators.required]
    });
  }

  onFileChange(event: any, controlName: string, formGroup: FormGroup) {
    const file = event.target.files[0];
    if (file) {
      formGroup.get(controlName)?.setValue(file);
    }
  }
}

