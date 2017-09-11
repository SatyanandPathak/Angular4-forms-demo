import { Component } from '@angular/core';



@Component({
    selector: 'template-forms',
    styleUrls: ['templateforms.component.css'],
    templateUrl: 'templateforms.component.html'
})
export class TemplateFormsComponent {

    submitDetails(details){
        console.log("value:", details)
    }

    logDetails(userName){
        console.log("value", userName)
    }

}