import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {path: 'reports', component: ReportsComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: '', redirectTo: '/reports', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
