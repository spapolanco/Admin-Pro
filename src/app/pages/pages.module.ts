import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Progress2Component } from './progress2/progress2.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    Progress2Component,
    AccountSettingComponent,
  ],
  // Cuando los vamos a usar fuera de su Modulo entonces debemos exportarlo para
  // que pueda ser usados por ootros componente
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule, 
    FormsModule,   
    ComponentsModule,
  ]
})
export class PagesModule { }
