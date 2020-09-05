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
        return of(APPLICATIONS)
    }

}