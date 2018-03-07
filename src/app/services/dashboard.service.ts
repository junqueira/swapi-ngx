import { debug } from 'util';
import { People } from './../models/people';
import { Injectable } from '@angular/core';
import { RestServiceService } from "./base/rest-service.service";
// import { Preference } from '../models/preference';
import { Observable } from 'rxjs/Observable';
// import { Order } from '../models/order';
// import { Activity } from '../models/activity';
// import { Trade } from '../models/trade';
import { Http } from '@angular/http';
// import { ReqOptionsService } from './base/req-options.service';
import { GlobalService } from '../globals/global.service';

@Injectable()
export class DashboardService extends RestServiceService {

  constructor(
    http: Http,
    // reqOpt: ReqOptionsService,
    globalService: GlobalService
  ) {
    super(
      http,
    //   reqOpt,
      globalService,
    );
  }
//   getChartMoeda(moeda: string,interval: string) {
//     return this.get(`chart/${moeda}/${interval}`);
//   }
  
  getPeople() {
	// debugger
    return this.get(`people`) as Observable<People[]>;
  }

//   getPreferencesTickers() {
//     return this.get(`dashboard/preferences`) as Observable<Preference[]>;
//   }
//   getTrades(moedaCorrente: string) {
//     return this.get(`trades/${moedaCorrente}`) as Observable<Trade[]>;
//   }
//   getBalance() {
//     return this.get(`balance`);
//   }
//   getOrderBook(moedaCorrente: string) {
//     return this.get(`orderbook/${moedaCorrente}`);
//   }
//   getExtrato() {
//     return this.get(`activity`) as Observable<Activity[]>;
//   }
//   getSimbolos() {
//     return this.get(`symbols`);
//   }
//   getOrders(moedaCorrente: string) {
//     return this.get(`orders/${moedaCorrente}`) as Observable<Order[]>;
//   }
//   getConverter(currencyPair: string, amount: number) {
//     return this.get(`converter/${amount}/${currencyPair}`);
//   }
//   cancelOrder(orderId: string) {
//     let body = `orderId=${orderId}`;    
//     return this.postForm(`cancelOrder`, body);
//   }
//   postNewOrder(amount: string, price: string, currencyPair: string, isBuy: boolean) {
//     let body = `amount=${amount}&price=${price}&currencyPair=${currencyPair}&isBuy=${String(isBuy)}`;  
//     return this.postForm(`newOrder`, body);
//   }
//   postNewCurrencyPair(moeda: string) {
//     return this.postJson(`dashboard/preferences/${moeda}`, null);
//   }
//   deleteCurrencyPair(moeda: string) {
//     return this.delete(`dashboard/preferences/${moeda}`);
//   }
}
