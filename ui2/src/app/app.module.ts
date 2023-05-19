import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ReportsComponent } from './reports/reports.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddteamComponent } from './maintenance/modal/addteam/addteam.component';
import { EditteamComponent } from './maintenance/modal/editteam/editteam.component';
import { DeleteteamComponent } from './maintenance/modal/deleteteam/deleteteam.component';
import { MonthsTemplateComponent } from './reports/months-template/months-template.component';
import { AptVolTemplateComponent } from './reports/apt-vol-template/apt-vol-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ReportsComponent,
    MaintenanceComponent,
    AddteamComponent,
    EditteamComponent,
    DeleteteamComponent,
    MonthsTemplateComponent,
    AptVolTemplateComponent
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
