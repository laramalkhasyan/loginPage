import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  addForm= this.fb.group({    
      cardNumber:['',Validators.required],
      owner:['',Validators.required],
      cvv:['',Validators.required],
      expiration:['',Validators.required], 
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  goBack(){
    this.cIsActive.emit(this.active=false)
  }
 
}
