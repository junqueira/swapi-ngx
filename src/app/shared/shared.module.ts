import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

// import { FormatCurrencyPipe } from "../pipes/format-currency.pipe";
// import { CriptoFontsPipe } from '../pipes/cripto-fonts.pipe';
// import { ColumnFilterPipe } from '../pipes/column-filter.pipe';
// import { SortByPipe } from '../pipes/sort-by.pipe';

import { ModalErroComponent } from '../components/shared/modal-erro/modal-erro.component';
import { LoadingBarComponent } from '../components/shared/loading-bar/loading-bar.component';
// import { ExceptionPipe } from '../pipes/exception.pipe';
import { ModalTokenComponent } from '../components/shared/modal-token/modal-token.component';
import { FormsModule } from '@angular/forms';
import { ModalValidacaoComponent } from '../components/shared/modal-generica/modal-generica.component';
import { MenuComponent } from '../components/shared/menu/menu.component';
import { MenuLateralComponent } from '../components/shared/menu-lateral/menu-lateral.component';
import { ModalConfirmacaoComponent } from '../components/shared/modal-confirmacao/modal-confirmacao.component';
import { FooterComponent } from '../components/shared/footer/footer.component';

// services
import { ApiNotificationService } from '../services/api-notification.service';
import { ModalService } from '../globals/modal.service';
import { GlobalService } from '../globals/global.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [
    MenuComponent,
    MenuLateralComponent,
    // FormatCurrencyPipe,
    // CriptoFontsPipe,
    // ColumnFilterPipe,
    // ExceptionPipe,
    // SortByPipe,
    ModalErroComponent,
    ModalTokenComponent,
    ModalValidacaoComponent,
    ModalConfirmacaoComponent,
    LoadingBarComponent,
    FooterComponent
  ],
  exports: [
    MenuComponent,
    MenuLateralComponent,
    // FormatCurrencyPipe,
    // CriptoFontsPipe,
    // ColumnFilterPipe,
    // ExceptionPipe,
    // SortByPipe,
    ModalErroComponent,
    ModalTokenComponent,
    ModalValidacaoComponent,
    ModalConfirmacaoComponent,
    LoadingBarComponent,
    FooterComponent
  ],
  providers: [
    CurrencyPipe,
    ApiNotificationService,
    ModalService,
    GlobalService
  ]
})
export class SharedModule { }
