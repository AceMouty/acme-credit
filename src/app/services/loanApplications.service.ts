import { Injectable } from "@angular/core"
import { APPLICATIONS } from "../utils/loanApplications";
import { LoanApplication } from "../interfaces/loanApplication"
import { Observable, of } from "rxjs"
import { map, tap, pluck } from "rxjs/operators"
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class LoanApplicationService {

    // URL for Memory server, swap with API when able
    // private baseUrl: string = "api/applications";
    private baseUrl: string = "http://localhost:5000/api/loans"

    // Header config
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }

    constructor(private http: HttpClient) { }

    getApplications(): Observable<LoanApplication[]> {

        return this.http.get(this.baseUrl)
        .pipe(pluck("loans"));
    }

    getApplication(loanId: string): Observable<LoanApplication> {
        
        return this.http.get<LoanApplication>(`${this.baseUrl}/${loanId}`)
    }

    updateLoan(updatedLoan: LoanApplication): Observable<any> {

        return this.http.put(this.baseUrl + `/${updatedLoan.loanId}`, updatedLoan, this.httpOptions)
    }

    createApplication(appData: LoanApplication): Observable<LoanApplication> {
        return this.http.post<LoanApplication>(this.baseUrl, appData, this.httpOptions)
    }

}