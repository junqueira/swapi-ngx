import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modulos Externos
// import { NgxQRCodeModule } from 'ngx-qrcode2';
// import { CurrencyMaskModule } from "ng2-currency-mask";
// import { DxDateBoxModule } from 'devextreme-angular';
import { NgxPaginationModule } from 'ngx-pagination';

//Components
// import { InformativosComponent } from './shared/informativos/informativos.component';
// import { ExtratoComponent } from './shared/extrato/extrato.component';
// import { TransferenciaComponent } from './shared/transferencia/transferencia.component';
// import { BarraMoedasComponent } from './shared/barra-moedas/barra-moedas.component';
import { FirstPageComponent } from './first-page/first-page.component';
// import { PerfilComponent } from './shared/perfil/perfil.component';
// import { ConversorMoedasComponent } from './shared/conversor-moedas/conversor-moedas.component';
// import { TaxasComponent } from './shared/taxas/taxas.component';
// import { ConfiguracaoSaqueComponent } from './shared/configuracao-saque/configuracao-saque.component';
// import { ExtratoPageComponent } from './extrato-page/extrato-page.component';
// import { ExtratoCompletoComponent } from './shared/extrato-completo/extrato-completo.component';
// import { ConfiguracaoUploadComponent } from './shared/configuracao-upload/configuracao-upload.component';
// import { PerfilSetupComponent } from './shared/perfil-setup/perfil-setup.component';

//Services
// import { DashboardService } from "../../services/dashboard.service";
import { RestServiceService } from "../../services/base/rest-service.service";
// import { DashboardDadosService } from "../../globals/dashboard-dados.service";
// import { ProfileService } from '../../services/profile.service';
// import { WithdrawService } from '../../services/withdraw.service';
// import { ExcelService } from '../../globals/excel.service';
// import { DepositService } from '../../services/deposit.service';
// import { PublicService } from '../../services/public.service';
// import { SettingService } from '../../services/setting.service';
// import { ConversorService } from '../../services/conversor.service';

//Pipes
// import { CriptoMoedasPipe } from "../../pipes/cripto-moedas.pipe";
// import { FormatCurrencyPipe } from '../../pipes/format-currency.pipe';
// import { DateFilterPipe } from '../../pipes/date-filter.pipe';
// import { RealPipe } from '../../pipes/real.pipe';

//Modulos
import { SharedModule } from '../../shared/shared.module';

//Diretivas
// import { ChangeNomeMoedaDirective } from '../../directives/change-nome-moeda.directive';
// import { MaskCpfCnpjDirective } from '../../directives/mask-cpf-cnpj.directive';
// import { ListaTransferenciasComponent } from './shared/lista-transferencias/lista-transferencias.component';
import { HttpErrors } from '../../errors/http-errors';
// import { OnlyDecimalDirective } from '../../directives/only-decimal.directive';
// import { DocumentacaoComponent } from './documentacao-page/documentacao-page.component';
// import { TransferenciaPageComponent } from './transferencia-page/transferencia-page.component';
// import { ConfigComponent } from './shared/config/config.component';
// import { SaqueContasComponent } from './shared/saque-contas/saque-contas.component';
// import { AccountService } from '../../services/account.service';
// import { DepositoContasComponent } from './shared/deposito-contas/deposito-contas.component';
// import { FeeService } from '../../services/fee.service';
// import { TickerValoresComponent } from './shared/ticker-valores/ticker-valores.component';
import { TranslateModule } from '@ngx-translate/core';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import { PlanetComponent } from './planet/planet.component';
import { DashboardService } from '../../services/dashboard.service';
// import { SiteBlockchainComponent } from './shared/site-blockchain/site-blockchain.component';
// import { DatexPipe } from '../../pipes/datex.pipe';

@NgModule({
  imports: [
    // CurrencyMaskModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    // NgxQRCodeModule,
    // DxDateBoxModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  declarations: [
    // RealPipe,
    // DateFilterPipe,
    // CriptoMoedasPipe,
    // DatexPipe,
    // ChangeNomeMoedaDirective,
    // MaskCpfCnpjDirective,
    // OnlyDecimalDirective,
    // PerfilComponent,
    // InformativosComponent,
    // ExtratoComponent,
    // TransferenciaComponent,
    // BarraMoedasComponent,
    FirstPageComponent,
    PeopleComponent,
    PlanetComponent,
    // ExtratoPageComponent,
    // ConversorMoedasComponent,
    // TaxasComponent,
    // ConfigComponent,
    // ConfiguracaoSaqueComponent,
    // ExtratoCompletoComponent,
    // ConfiguracaoUploadComponent,
    // ListaTransferenciasComponent,
    // DocumentacaoComponent,
    // TransferenciaPageComponent,
    // SaqueContasComponent,
    // PerfilSetupComponent,
    // DepositoContasComponent,
    // TickerValoresComponent,
    // SiteBlockchainComponent
  ],
  exports: [
    // PerfilComponent,
    // BarraMoedasComponent,
    FirstPageComponent,
    PeopleComponent,
    // ExtratoPageComponent,
    // ConfigComponent,
    // ConfiguracaoSaqueComponent,
    // ConfiguracaoUploadComponent,
    // SaqueContasComponent,
    // PerfilSetupComponent,
    // DepositoContasComponent,
    // TaxasComponent,
    // SiteBlockchainComponent
  ],
  providers: [
    // DateFilterPipe,
    // CriptoMoedasPipe,
    // FormatCurrencyPipe,
    DatePipe,
    // DashboardDadosService,
    // DashboardService,
    // ProfileService,
    RestServiceService,
    // WithdrawService,
    // ExcelService,
    // PublicService,
    // DepositService,
    // SettingService,
    // AccountService,
    // FeeService,
    HttpErrors,
    // ConversorService,
    PeopleService,
    DashboardService
  ]
})
export class DashboardModule { }
