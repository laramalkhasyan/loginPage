import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(32)] ],
    confirm:['', Validators.required]
  })
  isSubmited = false
  @Output() rIsActive = new EventEmitter()
  active = true
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }
 
  isAnError(input){
    console.log(input, "sdfvs")
    if(this.isSubmited && input.errors)
    return true
  }
  onSubmit(){
    if (this.myform.valid) {
      this.active = false
      console.log("Form Submitted!");
      this.isSubmited = false;
      this.rIsActive.emit(this.active)
    }
  }

}
