import { Injectable } from '@angular/core';

@Injectable({
  //cuando vemos el  providedIn: 'root' no hay que IMPORTARLO en ningun MODULO. SIMPLEMENTE LO INJECTAN y todo listo.
  providedIn: 'root'
})
export class SettingService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 


    //  Consigueme el que esta en el localstorage sino me trae el default-dark.css
    const url= localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href',url);



  }


  changeTheme(theme: string) {
    // este #theme viene del index.html
    // <link href="./assets/css/colors/default-dark.css" id="theme" rel="stylesheet">

    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url)

    this.checkCurrentTheme();

  }

  checkCurrentTheme() {

    // Vanilla Javascript es Javascript Puro sin Framework 
    const links = document.querySelectorAll('.selector');


    links.forEach(elem => {

      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working')
      }




    })


  }

}
