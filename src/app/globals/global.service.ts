import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
// import { DashboardService } from "../services/dashboard.service";
// import { DashboardDadosService } from "./dashboard-dados.service";
import { Api } from "../enums/api.enum";
// import { Auth } from "../models/auth";
// import { TwoFactorAction } from "../enums/two-factor-action.enum";
import { Observable } from "rxjs";

declare var navigator;
declare var $;

@Injectable()
export class GlobalService {
  API: Api = Api.SERVIDOR;
  MOCK: boolean = true;
//   TWO_FACTOR_ACTION: TwoFactorAction = TwoFactorAction.NOT_DEFINED;

//   authTemporario: Auth = new Auth({});
  loading: boolean = true;
  ordenCompra: any = {};
  precoSelecionado: number;
  currencyBase: string;
  notificacoes: number = 0;

  notificationAction: () => void;

  constructor(
    private translate: TranslateService
  ) { }
  setNotificationAction(call?: () => void) {
    if (call)
      this.notificationAction = call;
  }
  getQtdNotifications() {
    return Observable.interval().map(i => this.notificacoes);
  }
  execNotificationAction() {
    if(this.notificationAction){
      this.notificationAction();
    }
  }
  switchLanguage(language: string) {
    this.translate.use(language);
    sessionStorage.setItem('language', language);
  }
  // guardaUsuarioCorrente(data: Auth) {
  //   if (data && data.token) {
  //     sessionStorage.setItem('currentUser', JSON.stringify(data));
  //   }
  // }
  showNotification(texto: string) {
    $.notiny({ text: texto, delay: 5000 });
  }
}
