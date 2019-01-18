import { ScenarioService } from '../../services/scenario.service';
import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import '../../../../app/rowcolor.js';





// const ELEMENT_DATA: Scenario[] = [];

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public dataSource;
  displayedColumns: any[] = ['id','scenarioname', 'scenarioowner', 'scenariodate', 'scenarioversion', 'scenariostatus'];

  constructor(private scenarioService:ScenarioService){}

  //  Filter

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

    this.scenarioService.getAllScenarios1().subscribe(results => {
      if(!results){
        return;
      }
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
    });
    
  }

 

}