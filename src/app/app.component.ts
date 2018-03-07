import { Component } from '@angular/core';
import { Language } from './enums/language.enum';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exibeBarras: boolean = false;
  public options = {
    timeOut: 5000,
    showProgressBar: false,
    pauseOnHover: true,
    animate: "fromRight",
    clickToClose: true,
    lastOnBottom: true,
    maxStack: 7,
    rtl: false,
  }
  constructor(
    private router: Router,
    private translate: TranslateService,
    private decimalPipe: DecimalPipe
  ) {
    translate.setDefaultLang(Language[translate.getBrowserLang()] || Language['pt']);
    translate.use(Language[translate.getBrowserLang()] || Language['pt']);
    console.log(translate.getBrowserLang());
  }
  ngOnInit() {
  }
}
