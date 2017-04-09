import { Component } from '@angular/core';
import { QueryService } from './app.service'
@Component({
    selector:'query',
    moduleId:module.id,
    templateUrl:'query.html',
    providers:[ QueryService ]

})
export class QueryComponent{
    name:string
    phone:number

    constructor(private queryService:QueryService)
    {

    }
    addPerson()
    {
        var person={
            name:this.name,
            phone:this.phone
        };
        this.queryService.addPerson(person).subscribe(data=>{
            console.log(data);
        });
    }
}