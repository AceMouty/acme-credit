import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
// import { FormBuilder } from "@angular/forms";
import { LoanApplicationService } from "../../services/loanApplications.service"
import { v4 as uuid } from "uuid"

@Component({
    selector: "app-loanApplication",
    templateUrl: "./loanApplication.component.html",
    styleUrls: ['./loanApplication.component.css']
})
export class LoanApplicationComponent {

    name = "Loan Application"
    constructor(private loanService: LoanApplicationService) { }

    onSubmit(formObj: NgForm) {

        // construct a payload and add an id field to it
        const newApplication = formObj.value
        newApplication.id = uuid();

        this.loanService.createApplication(formObj.value)
        formObj.resetForm()

    }
}