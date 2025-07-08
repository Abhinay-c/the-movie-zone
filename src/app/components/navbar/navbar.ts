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
    this.isDark = !this.isDark;
    if(this.isDark)  {
      document.body.classList.add('dark');
    }
    else{
      document.body.classList.remove('dark');
    }
  }
}
