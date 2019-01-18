import { Injectable } from '@angular/core';
import { FieldsService } from '../shared/components/fields/fields.service';


export class FieldsRepository {

    constructor(private _fieldsService : FieldsService) { }
    //PlaceHolder which calls sample getFields method from the Fields Service 
    getFields(formSnippet: string) {
      return this.getFields(formSnippet).map((response: Response) => response.json());
    }
  }