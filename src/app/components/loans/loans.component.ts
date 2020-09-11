import { Component, OnInit } from "@angular/core"
import { LoanApplicationService } from "../../services/loanApplications.service"
import { LoanApplication } from "../../interfaces/loanApplication"
// Temp import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from "axios"

@Component({
    selector: "app-loans",
    templateUrl: "./loans.component.html",
    styleUrls: ["./loans.component.css"]
})
export class LoansComponent implements OnInit {

    displayedColumns: string[] = ["name", "email", "phoneNumber", "loanAmount", "edit"]
    loans: LoanApplication[];

    constructor(private loanService: LoanApplicationService, private http: HttpClient) { }

    ngOnInit() {
        this.getLoans()
    }

    getLoans(): void {
        this.loanService.getApplications()
            .subscribe(res => {
                console.log("LOG FROM THE COMPONENT: ", res)
                this.loans = res
            })
    }
}