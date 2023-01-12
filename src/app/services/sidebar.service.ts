import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [

    {
      titulo: 'Dashboard',
      icono:'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/'},
        { titulo: 'ProgressBar', url: 'progress'},
        { titulo: 'ProgressBar2', url: 'progress2'},
        { titulo: 'Graficas', url: 'grafica1'},
        { titulo: 'Account Setting', url: 'account-setting'},
        { titulo: 'Promesas', url: 'promesas'},
        { titulo: 'Rxjs', url: 'rxjs'},

      ]

    }

  ]
  constructor() { 

  }
}
