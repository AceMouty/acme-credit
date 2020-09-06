import { Injectable } from "@angular/core"
import { APPLICATIONS } from "../utils/loanApplications";
import { LoanApplication } from "../interfaces/loanApplication"
import { Observable, of } from "rxjs"
import { map } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class LoanApplicationService {

    private baseUrl: string = "https://acme-credit.firebaseio.com"
    constructor(private http: HttpClient) { }

    getApplications(): Observable<LoanApplication[]> {
        //TODO: make a network request to get all applications from API
        // return of(APPLICATIONS)

        // FIREBASE API: get all the loan applications and convert the response from
        // a object to an array of objects
        return this.http.get(`${this.baseUrl}/posts.json`)
            .pipe(map(responseData => {
                const applicationsArray: LoanApplication[] = []
                for (const key in responseData) {
                    applicationsArray.push(...responseData[key])
                }
                return applicationsArray
            }))
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

    createApplication(appData: LoanApplication): void {
        // console.log("FROM LOAN SERVICE: ", appData)
        this.http.post(`${this.baseUrl}/posts.json`, appData)
            .subscribe(resData => console.log(resData))
    }

}