import { Component, OnInit,EventEmitter, Output,Input} from '@angular/core';
import { Validators ,FormBuilder,FormGroup,AbstractControl,FormControl,FormArray} from '@angular/forms';
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
  @Input() allForm: FormGroup
  isSubmited = false
  @Output() rIsActive = new EventEmitter()
  @Output() outputForm = new EventEmitter<any>()
  active = true
  constructor(private fb: FormBuilder) { }

  ngOnInit() { 
    const countControls = (control: AbstractControl): number => {
      if (control instanceof FormControl) {
        return 1;
      }
    
      if (control instanceof FormArray) {
        return control.controls.reduce((acc, curr) => acc + countControls(curr), 1)
      }
    
      if (control instanceof FormGroup) {
        return Object.keys(control.controls)
          .map(key => control.controls[key])
          .reduce((acc, curr) => acc + countControls(curr), 1);
      }
    }
    if(countControls(this.allForm) > 2){
      debugger
      this.myform.get("username").setValue(this.allForm.value.register.username)
      this.myform.get("email").setValue(this.allForm.value.register.email)
      this.myform.get("password").setValue(this.allForm.value.register.password) 
      this.myform.get("confirm").setValue(this.allForm.value.register.confirm) 
    }         
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
