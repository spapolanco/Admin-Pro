import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.scss']
  
})
export class NopagefoundComponent implements OnInit {
  vYear=new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
