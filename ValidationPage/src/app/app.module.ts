import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCardComponent } from './add-card/add-card.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ResultsComponent } from './results/results.component';
import { CardNumberDirective } from './card-number.directive';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddCardComponent,
    SubscribeComponent,
    ResultsComponent,
    CardNumberDirective,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
