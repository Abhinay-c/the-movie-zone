import { Component, OnInit } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';

@Component({
  selector: 'app-navbar',
  imports: [UiSwitchModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit{
  isDark = false;

  constructor() {}

  ngOnInit(): void {}

  toggleTheme() {
    if(!this.isDark){
      if(!document.body.classList.contains('dark')) {
        document.body.classList.add('dark');
      }
    } else{
      if(document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
      }
    }
  }
}
