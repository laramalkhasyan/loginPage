import { Component,Input } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allForm: FormGroup;
  title = 'ValidationPage';
  registerActive = true
  addCardActive = false
  subscribeActive=false
  resultsActive=false
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.allForm = this.fb.group({
      fullName: null
    })
  }
  displayRegister(active){
    this.registerActive=active
    this.addCardActive=!active
  }
  displayAddCard(active){
    this.addCardActive=active
    this.subscribeActive=!active
  }
  displaySubscribe(active){
    this.subscribeActive=active
    this.resultsActive=!active
  }
  getForm(name,form){
    this.allForm.setControl(name,form)
  }
}
