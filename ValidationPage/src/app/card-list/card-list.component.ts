import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import { map,tap, distinctUntilChanged } from 'rxjs/operators';

import { Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  addForm= this.fb.group({
    cardNumber:['',[Validators.required,Validators.minLength(19)]],
    owner:['',[Validators.required,Validators.pattern('^(Mr|Mrs|Ms) ([a-zA-Z]+\s[a-zA-Z]+)')]],
    cvv:['',[Validators.required,Validators.maxLength(3)]],
    expiration:['',Validators.required],
  })
  @Input() isSubmited :boolean
  @Output() isValid = new EventEmitter()
  @Output() outputCardForm = new EventEmitter()
  get cardInput() {
   return this.addForm.get("cardNumber")
  }
  get exDate() {
    return this.addForm.get("expiration")
   }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.outputCardForm.emit(this.addForm)
    this.cardInput.valueChanges.pipe(
      distinctUntilChanged(),
      map(value => this.formatCardNumber(value)),
      tap(value => this.cardInput.patchValue(value))
    ).subscribe((val) => {
    })
    this.exDate.valueChanges.pipe(
      distinctUntilChanged(),
      map(value => this.formatExDate(value)),
      tap(value => this.exDate.patchValue(value))
    ).subscribe((val) => {
    })
    
  }

  onSubmit(){    
    
    this.isValid.emit(this.addForm.valid)
  }
  private formatCardNumber(value: string): string {
    return value
      .replace(/\s+/g, "")
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})(?!$)/g, "$1 ");
  }  

  private formatExDate(value: string): string {
    return value
      .replace(/\/+/g, "")
      .replace(/\D/g, "")
      .slice(0, 4)
      .replace(/(\d{2})(?!$)/g, "$1/");
  }
}
 