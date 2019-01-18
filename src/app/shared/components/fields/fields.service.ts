import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }

  public url: any;
  public _http: any;

  getFields(formSnippet: string) {
    // var response = this._http.get(this.url, {
    //   }).do(response => {})
    //}
    
  }
}
