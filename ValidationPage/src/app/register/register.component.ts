import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform = this.fb.group({
    username: [''],
    email: [''],
    password: [''],
    confirm:['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }
    
  callingFunction() {
    console.log(this.myform.value);
   }
}
