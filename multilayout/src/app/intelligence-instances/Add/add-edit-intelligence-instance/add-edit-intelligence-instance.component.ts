import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-edit-intelligence-instance',
  templateUrl: './add-edit-intelligence-instance.component.html',
  styleUrls: ['./add-edit-intelligence-instance.component.scss']
})
export class AddEditIntelligenceInstanceComponent implements OnInit {
  open = true;
  model = new FormGroup({
    basic: new FormControl(''),
    container: new FormControl(''),
    required: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
  });
  contactForm: FormGroup;
  form: FormGroup = this.getReactiveForm();
  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
  }


  private getReactiveForm() {
    return new FormGroup({
        first: new FormControl('Luke', Validators.required),
        last: new FormControl('Skywalker', Validators.required),
      contact: new FormGroup({
        email: new FormControl(),
        phone: new FormControl(),
      }),
      password: new FormGroup({
        password: new FormControl(),
        confirm: new FormControl(),
      }),
    });
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl(),
      }),
      requestType: new FormControl(),
      text: new FormControl(),
    })
  }
}
