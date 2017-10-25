import {Component } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15p;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {dispaly:none}}
    `]
})
export class NavBarComponent{
}