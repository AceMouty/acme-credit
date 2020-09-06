import { Injectable } from "@angular/core"
import { APPLICATIONS } from "../utils/loanApplications";
import { LoanApplication } from "../interfaces/loanApplication"
import { Observable, of } from "rxjs"

@Injectable({
    providedIn: "root"
})
export class LoanApplicationService {
    constructor() { }

    getApplications(): Observable<LoanApplication[]> {
        //TODO: make a network request to get all applications from API
        return of(APPLICATIONS)
    }

    getApplication(id: number): Observable<LoanApplication> {
        return of(APPLICATIONS.find(loan => loan.id === id))
    }

    updateLoan(newLoan: LoanApplication): void {
        //TODO: send updated data to the DB and make this func use rxjs

        APPLICATIONS.forEach(loan => {
            if (loan.id === newLoan.id) {
                console.log("FOUND LOAN", loan)
                loan = { ...newLoan }
                console.log("UPDATED LOAN", loan)
            }
        })

    }

}