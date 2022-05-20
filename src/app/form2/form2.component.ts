import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, passwordValidator } from '../validators/check.validators';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  // public regForm: FormGroup = new FormGroup({
  //   username: new FormControl('Nam Anh'),
  //   email: new FormControl('example@gmail.com'),
  //   pass: new FormControl(''),
  //   confirmPass: new FormControl(''),
  // });

  public regForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), customValidator(/\@|\#|\$|\%|\^|\&/g)]],
      email: ['example@gmail.com', Validators.email],
      pass: [''],
      confirmPass: ['']
    }, {Validators: [passwordValidator]})
  }

  setDefaultValue(): void{
    this.regForm.patchValue({
      username:"Gia Khiêm", 
      email:"test@example.com",
      pass:"123",
      // confirmPass:"123"
    })
  }
get username(){
  return this.regForm.controls['username']
}
}

