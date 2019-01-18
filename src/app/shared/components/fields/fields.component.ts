import { Component, OnInit } from '@angular/core';
//import { FieldsRepository } from '../../../repositories/fields.repository';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  constructor(//private _fieldsRepository : FieldsRepository
    ) { }
  public formSnippet : any;
  ngOnInit() {
  }

  //PlaceHolder which calls sample getFields method from the Fields Repository 
  getFields()
  {
    //this._fieldsRepository.getFields(this.formSnippet);
  }

}
