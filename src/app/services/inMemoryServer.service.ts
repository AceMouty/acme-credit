import { Injectable } from "@angular/core"
import { InMemoryDbService } from "angular-in-memory-web-api"
import { APPLICATIONS } from "../utils/loanApplications"
import { LoanApplication } from "../interfaces/loanApplication"

@Injectable({
    providedIn: "root"
})
export class InMemoryServer implements InMemoryDbService {
    createDb() {
        const applications: LoanApplication[] = APPLICATIONS
        return { applications }
    }
}