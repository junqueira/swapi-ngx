import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
// import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
// import { Auth } from '../../../models/auth';
import { User } from '../../../models/user';
import { ErrorGenerico } from '../../../models/error-generico';
// import { ProfileService } from '../../../services/profile.service';
import { HttpErrors } from '../../../errors/http-errors';
import { ModalService } from '../../../globals/modal.service';
import { BaseComponent } from '../../base/base.component';
// import { Utils } from '../../../utils/utils';
import { GlobalService } from '../../../globals/global.service';
import { Observable } from 'rxjs';
import { NotificationsService, Notification } from 'angular2-notifications';
import { ApiNotification } from '../../../models/api-notification';
import { ApiNotificationService } from '../../../services/api-notification.service';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('avatarImg') avatarImg: ElementRef;
  @ViewChild('language') slcLanguage: ElementRef;

  clienteLogado: User = new User({});

  routerEdit: string[] = ['/dashboard', 'configuracao'];
  qtdNotificacoes: number = 0;
  notification: Array<Notification> = new Array<Notification>();
  mensagensNaoLidas = new Array<ApiNotification>();
  mensagensTodas = new Array<ApiNotification>();

  constructor(
    public modalService: ModalService,
    public httpErrors: HttpErrors,
    public globalService: GlobalService,
    // private profileService: ProfileService,
    private translateService: TranslateService,
    // private authenticationService: AuthenticationService,
    private apiNotificationService: ApiNotificationService,
    private notificationsService: NotificationsService,
    private router: Router) {
    super();
  }

  ngAfterViewInit() {
    // debugger
  }
  ngOnInit() {
    this.carregandoConfiguracoesMenuLateral();
    this.preencherValoresPerfil();
    // this.buscarImagemPerfil();
    this.mostrarNotificacoes(true);
    this.buscarLanguageBrowser();
  }
  buscarLanguageBrowser() {
    // this.slcLanguage.nativeElement.value = this.translateService.getBrowserLang();
  }
  mostrarNotificacoes(exibeNotificacao: boolean) {
    // this.apiNotificationService.getNotifications()
    //   .takeUntil(this.unsubscribe)
    //   .subscribe(
    //   data => {
    //     this.mensagensTodas = data.messages.map(x => Object.assign(new ApiNotification({}), x)) as Array<ApiNotification>;
    //     this.mensagensNaoLidas = this.mensagensTodas.filter(x => x.status == "UNREAD")
    //     // if (exibeNotificacao) {
    //     //   // debugger
    //     //   this.mensagensNaoLidas.forEach(x => {
    //     //     switch (x.level) {
    //     //       case "NORMAL":
    //     //         this.notification.push(this.notificationsService.info(null, x.message));
    //     //         break;
    //     //       case "MEDIUM":
    //     //         this.notification.push(this.notificationsService.alert(null, x.message));
    //     //         break;
    //     //       case "URGENT":
    //     //         this.notification.push(this.notificationsService.error(null, x.message));
    //     //         break;
    //     //       case "ADVERTISER":
    //     //         this.notification.push(this.notificationsService.warn(null, x.message));
    //     //         break;
    //     //       default:
    //     //         this.notification.push(this.notificationsService.info(null, x.message));
    //     //         break;
    //     //     }
    //     //   });
    //     // }
    //     this.qtdNotificacoes = this.mensagensNaoLidas.length;
    //     // this.globalService.notificacoes = this.mensagensNaoLidas.length;
    //     //this.globalService.showNotification(`Mostrando notificação: ${index}`);
    //     //this.notification.push(this.notificationsService.html(`<p>Mostrando notificação: ${index}</p>`, "info"));
    //   },
    //   error => {

    //   });
  }
  acaoNotificao(notification: ApiNotification, acao: string) {
    // this.apiNotificationService.postAcaoMensagem(notification.id, acao)
    //   .takeUntil(this.unsubscribe)
    //   .subscribe(
    //   data => {
    //     this.mostrarNotificacoes(false);
    //   },
    //   error => {

    //   });
  }
  logout() {
    // this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.removerOverlay();
  }
  preencherValoresPerfil() {
    if (sessionStorage.getItem('currentUser')) {
      // let user = new Auth(JSON.parse(sessionStorage.getItem('currentUser')));
      // this.clienteLogado = user.user;
    }
  }
  removerOverlay() {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  }
  carregandoConfiguracoesMenuLateral() {
    $("#sidebar").niceScroll({
      cursorcolor: '#02080e',
      cursorwidth: 4,
      cursorborder: 'none'
    });
    $('#dismiss, .overlay, .closeMenu').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').fadeOut();
    });

    $('#sidebar-expand').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').hide().fadeIn();
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
  }
  uploadAvatar($event) {
    let files = $event.target.files || $event.srcElement.files;
    let image = files[0];
    if (image) {
      let formComprovante = new FormData();
      formComprovante.append("file", image);

      // this.profileService.avatarUpload(formComprovante).takeUntil(this.unsubscribe).subscribe(
      //   data => {
      //     if (Boolean(data.success)) {
      //       this.modalService.exibeModalSucesso(
      //         null,
      //         "Upload do avatar efetuado com sucesso!");
      //       this.buscarImagemPerfil();
      //     }
      //   },
      //   error => {
      //     this.httpErrors.verifyErrorModal(new ErrorGenerico(error));
      //   }
      // )
    }
  }
  // buscarImagemPerfil() {
  //   this.profileService.buscarImagemAvatar().takeUntil(this.unsubscribe).subscribe(
  //     data => {
  //       this.avatarImg.nativeElement.src = `data:image/png;base64,${Utils.convertByteToBase64Img(data)}`
  //     },
  //     error => {
  //       this.httpErrors.verifyErrorModal(new ErrorGenerico(error));
  //     }
  //   );
  // }
}
