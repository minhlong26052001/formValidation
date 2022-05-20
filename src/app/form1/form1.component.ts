import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }
  courses:any[]=["Angular", "Python", "Ruby", "Golang"];
  studentModel = new Student("Khanh Chieu","khanhchieuchieu@gmailcom","090909090909","none","caSang")
  errFlag = false

  ngOnInit(): void {
  }
validateCourse(value:any){
  if(value=='none'){
    this.errFlag=true
  }else{
    this.errFlag=false
  }
}
}
