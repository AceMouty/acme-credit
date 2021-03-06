import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from "@angular/common/http"

// Custom Components
import { LoanApplicationComponent } from "./components/loan-application/loanApplication.component";
import { LoansComponent } from "./components/loans/loans.component"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { LoanEditorComponent } from "./components/loan-editor/loanEditor.component"

// Services
import { LoanApplicationService } from "./services/loanApplications.service"

// Material Components
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar"

// In Memory Web API
import { InMemoryServer } from "./services/inMemoryServer.service"
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationComponent,
    LoansComponent,
    NavbarComponent,
    LoanEditorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryServer)
  ],
  providers: [
    LoanApplicationService,
    InMemoryServer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
