import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';

// Custom Components
import { LoanApplicationComponent } from "./components/loan-application/loanApplication.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Material Components
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
