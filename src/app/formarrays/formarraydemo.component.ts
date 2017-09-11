/**
 * Component to demonstrate FormArray using normal way anf using Form Builders
 */

import { FormGroup, FormArray, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector:'formarray-demo',
    templateUrl: 'formarraydemo.component.html',
    styleUrls: ['formarraydemo.component.css']
})
export class FormArrayDemoComponent {
    // Initial declaration which is overridden by Constructor
    arraysform:FormGroup;
    /*arraysform = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl()
        }),
        topics: new FormArray([])
    });*/

    /**
     * Alternative way of grouping FormGroup, FormControl and FormArray
     * @param formBuilder  
     */
    constructor(formBuilder: FormBuilder){
        this.arraysform = formBuilder.group({
            name: ['', Validators.required],
            contact: formBuilder.group({
                email: [],
                phone: []
            }),
            topics: formBuilder.array([])
        })
    }

    get topics(){
        return this.arraysform.get('topics') as FormArray
    }

    addTopic(topic: HTMLInputElement){
        this.topics.push(new FormControl(topic.value));
        topic.value = '';
    }

    removeTopic(topic: FormControl){
        let index:number = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
}