import { Injectable } from '@angular/core';
import { RestServiceService } from './base/rest-service.service';
import { Http } from '@angular/http';
// import { ReqOptionsService } from './base/req-options.service';
import { GlobalService } from '../globals/global.service';

@Injectable()
export class ApiNotificationService extends RestServiceService {

  constructor(
    http: Http,
    // reqOpt: ReqOptionsService,
    globalService: GlobalService
  ) {
    super(
      http,
      // reqOpt,
      globalService,
    );
  }

  getNotifications() {
    return this.get(`notification`);
  }
  postAcaoMensagem(id: number, acao: string) {
    //READ = Lida / UNREAD = Nao lida / DELETED = Deletado
    let body = `newStatus=${acao}`;
    return this.postForm(`notification/${id}`, body);
  }
}
