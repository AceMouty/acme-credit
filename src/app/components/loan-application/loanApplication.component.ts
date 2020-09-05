import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
// import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-loanApplication",
    templateUrl: "./loanApplication.component.html",
    styleUrls: ['./loanApplication.component.css']
})
export class LoanApplicationComponent {

    name = "Loan Application"
    constructor() { }

    onSubmit(formObj: NgForm) {
        console.log("FORM SUBMITTED!");
        console.log(formObj.value)
    }
}