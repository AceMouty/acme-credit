import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Custom Components
import { LoanApplicationComponent } from "./components/loan-application/loanApplication.component";
import { LoansComponent } from "./components/loans/loans.component"

// Services
import { LoanApplicationService } from "./services/loanApplications.service"

// Material Components
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatTableModule } from "@angular/material/table"

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent,
    LoansComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [
    LoanApplicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
