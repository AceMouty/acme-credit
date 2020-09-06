import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router"

// Components
import { LoansComponent } from './components/loans/loans.component'
import { LoanApplicationComponent } from './components/loan-application/loanApplication.component'
import { LoanEditorComponent } from "./components/loan-editor/loanEditor.component"


const routes: Routes = [
  { path: "", redirectTo: "/loans", pathMatch: "full" },
  { path: "loans", component: LoansComponent },
  { path: "loan-application", component: LoanApplicationComponent },
  { path: "loan-editor/:id", component: LoanEditorComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
