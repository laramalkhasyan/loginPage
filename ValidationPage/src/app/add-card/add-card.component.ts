import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Validators ,FormBuilder, ValidationErrors,FormGroup,AbstractControl,FormControl,FormArray} from '@angular/forms';

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
  @Input() allForm: FormGroup
  @Output() cIsActive = new EventEmitter()
  @Output() backActive = new EventEmitter()
  @Output() outputCardForm = new EventEmitter()
  activeBack = false
  active = true
  isSubmited= false
  cardList = []
  isValided 
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
    if(countControls(this.allForm) > 7){
      this.addForm.get("city").patchValue(this.allForm.value.card.city)
      this.addForm.get("street").patchValue(this.allForm.value.card.street)
      this.addForm.get("apartment").patchValue(this.allForm.value.card.apartment)
      this.addForm.get("phoneNumber").patchValue(this.allForm.value.card.phoneNumber)
    }
  }
  goBack(){
    this.backActive.emit(this.activeBack=true)
  }
  addCard(){
    if(this.cardList.length<3){
      this.cardList.push("1")
    }
    
  } 
  childIsValid(val){
    this.isValided=val
  }
  onSubmit(){ 
      if (this.addForm.valid && this.isValided) {
        this.active = false
        console.log("Form Submitted!");
        this.isSubmited = false;        
        this.outputCardForm.emit(this.addForm)
        this.cIsActive.emit(this.active)
      }
  }
  getCardForm(form){
    this.addForm.setControl("cardList",form)
  }

}

