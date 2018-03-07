import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Inject } from '@angular/core';
import { CurrencyPipe, HashLocationStrategy, LocationStrategy, DecimalPipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

//Providers
import { GlobalService } from './globals/global.service';

//Modulos de tradução
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Rotas
import { Routing } from "./app.routing";

//Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModalAlertaComponent } from './components/shared/modal-alerta/modal-alerta.component';
// import { ConfigPageComponent } from './components/dashboard-principal/config-page/config-page.component';
import { TermosPageComponent } from './components/termos-page/termos-page.component';
import { TermosDeUsoComponent } from './components/shared/termos-de-uso/termos-de-uso.component';
// import { FaqPageComponent } from './components/faq-page/faq-page.component';
// import { ChangePasswordComponent } from './components/fluxo-usuario/change-password/change-password.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// import { FaqComponent } from './components/shared/faq/faq.component';

//Modulos
import { DashboardModule } from "./components/dashboard/dashboard.module";
// import { UsuarioModule } from "./components/fluxo-usuario/usuario.module";
import { SharedModule } from './shared/shared.module';
// import { ConfiguracoesModule } from './components/configuracoes/configuracoes.module';

//Services
// import { ReqOptionsService } from './services/base/req-options.service';

//Pipes
// import { CriptoMoedasPipe } from './pipes/cripto-moedas.pipe';

// import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";
// import { CurrencyMaskModule } from 'ng2-currency-mask';
// import { StompService, StompConfig } from '@stomp/ng2-stompjs';
import { SimpleNotificationsModule } from 'angular2-notifications';
// import { Utils } from './utils/utils';

declare var navigator;
export function getCulture() {
  return navigator.userLanguage || navigator.language || (navigator.languages ? navigator.languages[0] : "");
}
// export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
//   align: "center",
//   allowNegative: false,
//   allowZero: true,
//   decimal: ",",
//   precision: 2,
//   prefix: "",
//   suffix: "",
//   thousands: "."
// };

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// const stompConfig: StompConfig = {
//   url: 'ws://159.203.169.67:15674/ws',
//   headers: {
//     login: 'guest',
//     passcode: 'guest'
//   },
//   heartbeat_in: 0,
//   heartbeat_out: 200,
//   reconnect_delay: 5000,
//   debug: false
// };

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ModalAlertaComponent,
    // ConfigPageComponent,
    TermosPageComponent,
    TermosDeUsoComponent,
    // FaqPageComponent,
    // ChangePasswordComponent,
    // FaqComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    DashboardModule,
    // ConfiguracoesModule,
    // UsuarioModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: getCulture
    },
    // { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // ReqOptionsService,
    DecimalPipe,
    // StompService,
    // {
    //   provide: StompConfig,
    //   useValue: stompConfig
    // }
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
  constructor( @Inject(LOCALE_ID) locale: string) {  }
}
