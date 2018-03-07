import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// import { AuthenticationService } from "../../../services/authentication.service";
import { GlobalService } from '../../../globals/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'menu-navbar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  notificacoes: Observable<number>;

  constructor(
    // public globalService: GlobalService,
    // private authenticationService: AuthenticationService,
    private router: Router) {

  }

  ngOnInit() {
    // debugger;
    // this.notificacoes = this.globalService.getQtdNotifications();
  }
  logout() {
    // this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
