import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { LoanApplicationService } from "../../services/loanApplications.service"

// Interfaces
import { LoanApplication } from "../../interfaces/loanApplication"

@Component({
    selector: "app-editor",
    templateUrl: "./loanEditor.component.html",
    styleUrls: ["./loanEditor.component.css"]
})
export class LoanEditorComponent implements OnInit {

    // loans: LoanApplication[];
    loan: LoanApplication;

    constructor(
        private loanService: LoanApplicationService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.getApplication();
    }

    getApplication(): void {

        const id: string = this.route.snapshot.paramMap.get("id")
        this.loanService.getApplication(id)
            .subscribe(loanData => {
                this.loan = loanData
                console.log(this.loan)
            })
    }

    onSubmit(): void {
        this.loanService.updateLoan(this.loan)
            .subscribe(_ => this.location.back())
    }
}