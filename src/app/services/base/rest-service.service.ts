import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GlobalService } from '../../globals/global.service';
import { Api } from '../../enums/api.enum';

@Injectable()
export class RestServiceService {
  URL: string = "";

  constructor(
    private http: Http,
    public globalService: GlobalService
  ) {
    if (globalService.API == Api.MOCKADO) {
      this.URL = "/assets/mock/"
      return;
    }

    if (globalService.API == Api.LOCALHOST) {
      this.URL = "http://localhost:8000/";
      return;
    }

    if (globalService.API == Api.SERVIDOR) {
      this.URL = "https://swapi.co/api/"
      return;
    }

    if (globalService.API == Api.TEST) {
      this.URL = "http://localhost:8000/";
      return;
    }
  }

  get(url: string) {
    // debugger
    return this.http
      .get(`${this.URL + url}`)
      .map((response: Response) => response.json());
  }

  postForm(url: string, params: string) {
    return this.http
      .post(`${this.URL + url}`, params)
      .map((response: Response) => response.json());
  }

}
