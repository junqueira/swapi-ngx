import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';
import { People } from '../../../models/people';
// import { People } from './person';


@Injectable()
export class PeopleService {
    constructor(private http: Http){}

    getPeople(): Observable<People[]> {
        // debugger
        return this.http.get('https://swapi.co/api/people')
                .map((res:Response) => res.json());
    }
    
}