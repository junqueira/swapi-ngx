import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ChangeDetectionStrategy, OnDestroy, AfterContentInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PeopleService } from './people.service';

import { GlobalService } from '../../../globals/global.service';

import { Subject, Subscription } from 'rxjs';

//Models
// import { Activity } from '../../../../models/activity';

//Services
// import { DashboardDadosService } from '../../../../globals/dashboard-dados.service';
// import { DashboardService } from '../../../services/dashboard.service';

//Utils
import { isNullOrUndefined } from 'util';
import { People } from '../../../models/people';
// import { People } from './person';

import { ErrorGenerico } from '../../../models/error-generico';
import { DashboardService } from '../../../services/dashboard.service';
import { HttpErrors } from '../../../errors/http-errors';
import { BaseComponent } from '../../base/base.component';

//Enums
// import { Categorias } from '../../../../enums/categorias.enum';
// import { Status } from '../../../../enums/status.enum';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    changeDetection: ChangeDetectionStrategy.Default,
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent extends BaseComponent implements  OnInit {
    peopleHeader: string;
    // people: People;
    exibePaginacao: boolean = false;
    // public Categorias = Categorias;
    // public Status = Status;
    // private unsubscribe: Subject<void> = new Subject<void>();
    private observer: Subscription;
    
    now: Date = new Date();
  
    // @Input() explorer: Map<string, string> = new Map();
    // @Input() lancamentos$: Observable<Array<Activity>>;
    // @Input() peoples: Array<People>;
    // @Input() qtdLancamentosTotal: number;
    // @Input() exibePaginacao: boolean;
    // @Output() exportarExcel = new EventEmitter();
  
    peoples: Array<People>;

    dataInicial: string;
    dataFinal: string;
  
    pagina: number = 1;
    qtdPorPagina: number = 8;
    // lancamentos: Array<Activity>;
  
    textoFiltro: string = "";
    colunaFiltro: string = "";
  
    orderBy: string = "createdAt";
  

    constructor(
        private ps: PeopleService,
        public globalService: GlobalService,
        private dashboardService: DashboardService,
        public httpErrors: HttpErrors
    ){
        super(httpErrors);
        // this.peopleHeader = 'This is people.';
    }

    loadPeople(){
        this.peoples = new Array<People>();
        this.dashboardService.getPeople().subscribe(
            data => {
                // this.qtdLancamentosTotal = data.length
                // this.lancamentos$ = this.dashboardDadosService.getLancamentosObservable(data);
                this.peoples = data;
                this.exibePaginacao = true;
            },
            error => {
                this.httpErrors.verifyErrorModal(new ErrorGenerico(error));
        });
        console.log(this.peoples)
    }

    ngOnInit(){
        // debugger
        this.loadPeople()
    }

    exportar() {
        // this.exportarExcel.emit();
    }

    setOrderBy(colOrderBy: string) {
        this.orderBy = colOrderBy;
    }
}