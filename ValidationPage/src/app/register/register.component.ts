import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder,FormGroup} from '@angular/forms';
import { MustMatch } from 'src/app/mustMatch.validator'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(32)] ],
    confirm:['', Validators.required]
  }, {
    validator: MustMatch.MatchPassword
  })
  isSubmited = false
  @Output() rIsActive = new EventEmitter()
  @Output() outputForm = new EventEmitter<any>()
  active = true
  constructor(private fb: FormBuilder) { }

  ngOnInit() {          
    this.outputForm.emit(this.myform)
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
