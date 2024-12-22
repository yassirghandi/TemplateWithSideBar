import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SublevelMenuComponent } from './sublevel-menu.component';
import { INavBarData } from './helper';

interface sideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink,  CommonModule , RouterLinkActive , SublevelMenuComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('rotate',[
      transition(':enter' , [
        animate('1000ms' , 
          keyframes([
            style({transform : 'rotate(0deg)' , offset : '0'}),
            style({transform : 'rotate(2turn)' , offset : '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{

  @Output() onToggleSideNav : EventEmitter<sideNavToggle> = new EventEmitter();


  @HostListener('window:resize', ['$event'])
  onResize(event : any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false ;
      this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
  }

  constructor(private router : Router){

  }


  collapsed :boolean = true ;
  navData = navbarData;
  screenWidth= 0;
  multiple : boolean= false ;

  toggleCollapsed(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
  }

  closeSideNav(){
    this.collapsed = false ;
    this.onToggleSideNav.emit({collapsed : this.collapsed , screenWidth : this.screenWidth})
  }

  handleClick(item:INavBarData){
    if(!this.multiple){
        for(let modelItem of this.navData){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
        }
      item.expanded = !item.expanded;
    }
  }

  getActiveClass(data : INavBarData) : string{
    return this.router.url.includes(data.routerLink) ? 'active' : '';
  }

}
