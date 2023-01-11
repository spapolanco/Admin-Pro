// digitar este Snipper --> ng-router 

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Progress2Component } from './progress2/progress2.component';
import { Grafica1Component } from './grafica1/grafica1.component';



const routes: Routes = [
    {
      path:'dashboard',
    component: PagesComponent,
    children:[
      {path: '', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'progress2', component: Progress2Component},
      {path: 'grafica1', component: Grafica1Component},
      // {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    ]
  
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
       
    exports: [RouterModule]
})
export class PagesRoutingModule {}
