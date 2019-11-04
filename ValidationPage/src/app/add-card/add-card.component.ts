import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  addForm= this.fb.group({   
      city:['',Validators.required],
      street:['',Validators.required],
      apartment:['',Validators.required],
      phoneNumber:['',Validators.required]
  })
  openCard=false
  addBilling = false
  @Output() cIsActive = new EventEmitter()
  active = true
  isSubmited= false
  cardList = []
  isValid
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  goBack(){
    this.cIsActive.emit(this.active=false)
  }
  addCard(){
    if(this.cardList.length<3){
      this.cardList.push("1")
    }
    
  } 
  childIsValid(input){
    this.isValid=input
  }
  onSubmit(){   
    this.getFormValidationErrors();        
      if (this.addForm.valid && this.isValid) {
        debugger
        this.active = false
        console.log("Form Submitted!");
        this.isSubmited = false;
        this.cIsActive.emit(this.active)
      }

      console.log(this.addForm)
  }

  getFormValidationErrors() {
    Object.keys(this.addForm.controls).forEach(key => {
    const controlErrors: ValidationErrors = this.addForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log("Key control: " + key + ", keyError: " + keyError + ", err value: ", controlErrors[keyError]);
          });
        }
      });
    }
}

