import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  goBack(){
    this.cIsActive.emit(this.active=false)
  }
  addCard(){
    this.cardList.push("1")
  }
 
  onSubmit(){           
      if (this.addForm.valid) {
        this.active = false
        console.log("Form Submitted!");
        this.isSubmited = false;
        this.cIsActive.emit(this.active)
      }
  }
}

