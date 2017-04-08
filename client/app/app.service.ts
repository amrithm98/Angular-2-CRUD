import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService{
    constructor(private http:Http){}

    addPerson(person)
    {
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post("/api/person",person,{headers:headers}).map(response=>response.json())
    }
}