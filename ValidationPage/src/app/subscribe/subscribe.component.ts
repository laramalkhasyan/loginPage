import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribe = this.fb.group({
    category:['subscribe'],
    email:['',[Validators.required,Validators.email]],
  })
  active=true
  backActive=false
  isSubmited  =false
  @Output() sIsActive = new EventEmitter()
  @Output() backIsActive = new EventEmitter()
  @Output() outputSubscribeForm = new EventEmitter()
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.changeValidation()
  }
  onSubmit(){
    if(this.subscribe.valid){
      this.sIsActive.emit(this.active=false)  
      this.outputSubscribeForm.emit(this.subscribe)
    }    
  }

  goBack(){
    debugger
    this.backIsActive.emit(this.backActive=true)
  }
  changeValidation(){
    const emailControl = this.subscribe.get('email')

    this.subscribe.get("category").valueChanges
    .subscribe(category =>{
      if(category == "subscribe"){
        emailControl.setValidators([Validators.required,Validators.email])
      }
      else if (category == "later"){
        emailControl.setValidators(null)
      }
      emailControl.updateValueAndValidity()
    })
  }
}
