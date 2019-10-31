import { Component, OnInit,Input } from '@angular/core';

import { Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  addForm= this.fb.group({
    cardNumber:['',Validators.required],
    owner:['',[Validators.required,Validators.pattern('^Mr | Mrs')]],
    cvv:['',Validators.required],
    expiration:['',Validators.required],
  })
 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  @Input() isSubmited :boolean
}
 