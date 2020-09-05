import { Component, OnInit } from "@angular/core"
import { LoanApplicationService } from "../../services/loanApplications.service"
import { LoanApplication } from "../../interfaces/loanApplication"

@Component({
    selector: "app-loans",
    templateUrl: "./loans.component.html",
    styleUrls: ["./loans.component.css"]
})
export class LoansComponent implements OnInit {

    displayedColumns: string[] = ["name", "email", "phoneNumber", "loanAmount", "edit"]
    loans: LoanApplication[];

    constructor(private loanService: LoanApplicationService) { }

    ngOnInit() {
        this.getLoans()
    }

    getLoans(): void {
        this.loanService.getApplications()
            .subscribe(loans => this.loans = loans)
    }
}