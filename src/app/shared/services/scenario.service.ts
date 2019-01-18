import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import{IScenario} from '../../models/scenario'

@Injectable({
  providedIn: 'root'
})

export class ScenarioService {

  constructor(private httpService: HttpClient) { }


  getAllScenarios1():Observable<IScenario[]> {
    return this.httpService.get<IScenario[]>('http://localhost:8080/api/scenarios');
  }


  create(scenario){
    return this.httpService.post('http://localhost:8080/api/scenarios', scenario).subscribe(data => console.log(data));;
  }
  

}
