import { Injectable } from "@angular/core"
import { APPLICATIONS } from "../utils/loanApplications";
import { LoanApplication } from "../interfaces/loanApplication"
import { Observable, of } from "rxjs"
import { map, tap } from "rxjs/operators"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class LoanApplicationService {

    // URL for Memory server, swap with API when able
    private baseUrl: string = "api/applications";

    // Header config
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }

    constructor(private http: HttpClient) { }

    getApplications(): Observable<LoanApplication[]> {
        //TODO: make a network request to get all applications from API
        // return of(APPLICATIONS)
        return this.http.get<LoanApplication[]>(this.baseUrl)
    }

    getApplication(id: string): Observable<LoanApplication> {
        // return of(APPLICATIONS.find(loan => loan.id === id))
        return this.http.get<LoanApplication>(`${this.baseUrl}/${id}`)
    }

    updateLoan(newLoan: LoanApplication): Observable<any> {
        //TODO: send updated data to the DB and make this func use rxjs

        // APPLICATIONS.forEach(loan => {
        //     if (loan.id === newLoan.id) {
        //         console.log("FOUND LOAN", loan)
        //         loan = { ...newLoan }
        //         console.log("UPDATED LOAN", loan)
        //     }
        // })
        return this.http.put(this.baseUrl, newLoan, this.httpOptions)

    }

    createApplication(appData: LoanApplication): Observable<LoanApplication> {
        return this.http.post<LoanApplication>(this.baseUrl, appData, this.httpOptions)
    }

}