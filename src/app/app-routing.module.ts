import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos 
// [módulos prefiero que estén siempre arriba porque 
// son digamos agrupadores de otro montón de componentes.]
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';






const routes: Routes = [

// path:'/dashboard' PagesRouting
// path:'/auth' AuthRouting
// path:'/medicos' medicosRouting
// path:'/compras' comprasRouting


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },


];

@NgModule({


  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule],
    
 

  exports: [RouterModule]
})
export class AppRoutingModule { }
