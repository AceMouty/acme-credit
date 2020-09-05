import { Component } from "@angular/core"
import { NgForm } from '@angular/forms';
// import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-loanApplication",
    templateUrl: "./loanApplication.component.html",
    styleUrls: ['./loanApplication.component.css']
})
// export class LoanApplicationComponent {
//     name: string = "Loan Application"

//     // Populates on form submission
//     applicationInfo;

//     constructor(private formBuilder: FormBuilder){
//         this.applicationInfo = this.formBuilder.group({
//             name: "",
//             email: "",
//             phone: "",
//             loanAmount: ""
//         })
//     }

//     // Handle form submission
//     submitHandler(e, formData){
//         e.preventDefault()
//         this.applicationInfo.reset();
//         console.log("Form Submitted", formData);
//     }
// }

export class LoanApplicationComponent {

    name = "Loan Application"
    constructor() { }

    onSubmit(formObj: NgForm) {
        console.log("FORM SUBMITTED!");
        console.log(formObj.value)
    }
}