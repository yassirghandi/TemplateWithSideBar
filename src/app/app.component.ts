import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './defaultLayout/sidenav/sidenav.component';
import { BodyComponent } from './defaultLayout/body/body.component';
import { HeaderComponent } from './defaultLayout/header/header.component';

interface sideNavToggle{
  screenWidth : number;
  collapsed : boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , SidenavComponent , BodyComponent , HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'APPSIDENAV';

  isSideNabCollapsed = false ;
  screenWidth = 0;  

  onToggleSideNav(data : sideNavToggle){
    this.isSideNabCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

}
