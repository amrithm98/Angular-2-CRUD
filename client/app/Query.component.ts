import { Component } from '@angular/core';
@Component({
    selector:'query',
    moduleId:module.id,
    templateUrl:'query.html'
})
export class QueryComponent{
    name:string
    constructor(){
        this.name="First Angular 2 App"
    }
}