import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FieldsComponent } from './shared/components/fields/fields.component';
import { Scenario1Component } from './shared/components/scenario1/scenario1.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ScenarioService} from './shared/services/scenario.service';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FieldsComponent,
    Scenario1Component,
    NavbarComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     FormsModule,
     HttpClientModule,
     MatToolbarModule,
     MatInputModule,
     MatPaginatorModule,
     MatIconModule,
     MatTableModule,
     MatSortModule,
     MatCardModule,
     MatTooltipModule,
     MatTabsModule,
     MatDividerModule
     
  ],
  providers: [ScenarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
