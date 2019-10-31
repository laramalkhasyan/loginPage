import { Component, OnInit } from '@angular/core';
import { Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  subscribe = this.fb.group({
    email:['',Validators.required]
  })
  isChecked=false
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }
  
}
