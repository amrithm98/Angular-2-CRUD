import { Component } from '@angular/core';
@Component({
    selector:'query',
    moduleId:module.id,
    templateUrl:'query.html'
})
export class QueryComponent{
    name:string
    phone:number
    addPerson()
    {
        var person={
            name:this.name,
            phone:this.phone
        };
        console.log(person);
    }
}