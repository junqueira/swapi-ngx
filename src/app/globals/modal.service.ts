import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ErrorApi } from '../models/error-api';

declare var $: any;

@Injectable()
export class ModalService {
  errorObjeto: ErrorApi;
  mensagemErro: string;
  mensagemSucesso: string;
  mensagemAlerta: string;
  mensagemToken: string;
  objErro: any;
  modalService: any = this;
  tokenCallback: (codigo) => void;
  confirmacaoCallback: () => void;
  
  tituloGenerico: string;
  mensagemGenerica: string;
  
  constructor(private router: Router) { }

  exibeModalToken(idModal: String, mensagem: string, call?: (codigo) => void) {
    this.mensagemToken = mensagem;
    if(call)
      this.tokenCallback = call;
    $(`#${idModal}`).modal('show');
  }
  exibeModalConfirmacao(idModal: String,titulo: string, mensagem: string, call?: () => void) {
    this.tituloGenerico = titulo;
    this.mensagemGenerica = mensagem;
    
    if(call)
      this.confirmacaoCallback = call;
    $(`#${idModal}`).modal('show');
  }
  exibeModalSucesso(route: Array<any>, mensagem: string) {
    this.tituloGenerico = "Sucesso";
    this.mensagemGenerica = mensagem;

    $(`#modalGenerica`).modal('show');

    let obsr = Observable.timer(1 * 3000).subscribe(t => {
      $(`#modalGenerica`).modal('hide');
      if (route)
        this.router.navigate(route); obsr.unsubscribe();
    });
  }
  exibeModalEfetivacao(mensagem: string) {
    this.tituloGenerico = "Sucesso";
    this.mensagemGenerica = mensagem;
    $(`#modalGenerica`).modal('show');
  }
  exibeModalAlerta(idModal: String, mensagem: string, timerSec?: number, route?: Array<any>, call?: () => void) {
    this.mensagemAlerta = mensagem;
    $(`#${idModal}`).modal('show');

    if (timerSec) {
      let obsr = Observable.timer(timerSec * 1000).subscribe(t => {
        $(`#${idModal}`).modal('hide');

        if (route)
          this.router.navigate(route); obsr.unsubscribe();

        if (call)
          call();
      });
    }
  }
  exibeModalErroApi(error: ErrorApi) {
    this.errorObjeto = error;
    $('#modalErroApi').modal('show');
  }
  exibeModalValidacao(titulo: string, mensagem: string, call?: () => void) {
    this.tituloGenerico = titulo;
    this.mensagemGenerica = mensagem;
    $('#modalGenerica').modal('show');
    if(call)
      $('#modalGenerica').on('hidden.bs.modal', function(e) {
        call();
      });
  }

  setToken(codigo: string){
    if(this.tokenCallback){
      this.tokenCallback(codigo);
    }
  }
  confirmarAcao() {
    if(this.confirmacaoCallback){
      this.confirmacaoCallback();
    }
  }
}
