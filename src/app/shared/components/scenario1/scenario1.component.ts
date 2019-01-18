import { DataTableComponent } from './../data-table/data-table.component';
import { HttpClient } from '@angular/common/http';
import { ScenarioService } from '../../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css']
})

export class Scenario1Component implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  dataSource: any;
  
  constructor(private ScenarioService: ScenarioService) { }

  ngOnInit() {

    // getScenarios();
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  onSubmit(scenario: NgForm){
    console.log(scenario);
    // console.log(scenario.valid);
    this.ScenarioService.create(scenario);

  }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

 



    

  }




