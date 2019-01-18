//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FieldsComponent } from './shared/components/fields/fields.component';
import { Scenario1Component } from './shared/components/scenario1/scenario1.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';

//Services
import {ScenarioService} from './shared/services/scenario.service';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import 'hammerjs';


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
