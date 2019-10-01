import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {User} from "../004_models/user";
import {ForbiddenNameValidator} from "./shared/user-name.validator";
import {PasswordValidator} from "./shared/password.validator";
import {RegistrationService} from "../003_services/registration.service";

const minLengthName: number = 3;

@Component({
  selector: 'app-i-forms',
  templateUrl: './i-forms.component.html',
  styleUrls: ['./i-forms.component.scss']
})
export class IFormsComponent implements OnInit {
  formData = {};
  isSubmitted: boolean = false;

  registrationForm: FormGroup;
  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(minLengthName), ForbiddenNameValidator(/admin/)]],
      password: [''],
      confirmPassword: [''],
      email: [''],
      subscribe: [false],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    },{validator: PasswordValidator});

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get Email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  loadAPIData() {
    // setValue - all
    // patchValue - selectively

    // this.registrationForm.setValue({
    //   userName: 'Bruce',
    //   password: '1234554321',
    //   confirmPassword: '1234554321',
    //   address: {
    //     city: 'City',
    //     state: 'State',
    //     postalCode: '123456'
    //   }
    // });

    this.registrationForm.patchValue({
      userName: 'Name',
      password: '1234554321',
      confirmPassword: '1234554321'
    });
  }
/*  answers = [{
    type: 'yes',
    text: 'YES'
  }, {
    type: 'no',
    text: 'NO'
  }];*/

  submitForm(userForm: NgForm) {
    console.log('Submited!', userForm);
    this.formData = userForm.form.value;
    this.isSubmitted = true;

    userForm.form.reset();
  }

  languages = ['C++', 'C', 'JS', 'TS'];

  defaultCountry = 'ua';
  isSelect = true;
  userModel = new User(
    'TOM',
    'user@com.ua',
    1234567898,
    'default',
    'radio-value 1',
    true
  );

  validateSelect(value) {
/*    if (value === 'default'){
      this.isSelect = true;
    }
    else {
      this.isSelect = false;
    }*/

    this.isSelect = value === 'default';
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

}



