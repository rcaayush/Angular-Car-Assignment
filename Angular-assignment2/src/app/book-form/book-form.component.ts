import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserData } from './user-data';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  userData: UserData = new UserData();
  condition:boolean = true;
  constructor(private fb: FormBuilder) { }

  resetButtonClicked() {

  }

  submitButtonClicked() {
    alert(this.userData.firstName+" "+this.userData.lastName+" registered a test drive on "+this.userData.dob);
  }


  registrationForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required,Validators.minLength(10)],
    age: ['' , Validators.required],
    dob: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    occupation: ['', Validators.required]

  })

  saveData() {
    console.log(this.registrationForm.value);
    alert('you have been registered our team will get in touch with you');

  }
  get firstName() {
    return this.registrationForm.get("firstName");
  }

  get form(): { [key: string]: AbstractControl; } {
    return this.registrationForm.controls;
  }

  get lastName(){
    return this.registrationForm.get("lastName");

  }

  get email(){
    return this.registrationForm.get("email");
  }

  get phoneNumber(){
    return this.registrationForm.get("phoneNumber");
  }
  get age(){
    return this.registrationForm.get("age");
  }
  get state(){
    return this.registrationForm.get("state");
  }

  get city(){
    return this.registrationForm.get("city");
  }
  get dob(){
    return this.registrationForm.get("dob");
  }
  get occupation(){
    return this.registrationForm.get("occupation");
  }

  ngOnInit(): void {
  }

}
