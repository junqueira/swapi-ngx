import { Component, OnInit, HostListener, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { GlobalService } from '../../globals/global.service';
import { BaseComponent } from '../base/base.component';
import { MenuLateralComponent } from '../shared/menu-lateral/menu-lateral.component';

import { DomSanitizer } from '@angular/platform-browser';

// import * as $ from 'jquery';
import { NotificationsService, Notification } from 'angular2-notifications';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent extends BaseComponent {
  constructor(
  ) {
    super();

  }
}
