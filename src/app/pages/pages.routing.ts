// digitar este Snipper --> ng-router 

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Progress2Component } from './progress2/progress2.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
    {
      path:'dashboard',
    component: PagesComponent,
    children:[
      {path: '', component: DashboardComponent , data:{ titulo:'Dashboard'} } , 
      {path: 'progress', component: ProgressComponent , data:{ titulo:'ProgressBar'} },
      {path: 'progress2', component: Progress2Component , data:{ titulo:'ProgressBar2'} },
      {path: 'grafica1', component: Grafica1Component , data:{ titulo:'Grafica1'} },
      {path: 'account-setting', component: AccountSettingComponent , data:{ titulo:'Account-Setting'} },
      {path: 'promesas', component: PromesasComponent, data:{ titulo:'Promesas'} },
      {path: 'rxjs', component: RxjsComponent , data:{ titulo:'Rxjs'} },
      // {path:'', redirectTo:'/dashboard',pathMatch:'full'},
    ]
  
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
       
    exports: [RouterModule]
})
export class PagesRoutingModule {}
