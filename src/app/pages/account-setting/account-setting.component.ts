import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: [
  ]
})
export class AccountSettingComponent implements OnInit {




  constructor(private settingsService:SettingService) { }

  ngOnInit(): void {


    this.settingsService.checkCurrentTheme();

  }

  changeTheme(theme: string) {
 

    this.settingsService.changeTheme(theme);



  }

  

}
