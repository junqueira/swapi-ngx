import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';

// import { DashboardDadosService } from '../../../globals/dashboard-dados.service';
import { GlobalService } from '../../../globals/global.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent extends BaseComponent implements OnInit, OnDestroy {
  percent: number = 0;
  observer: Subscription;

  @Input('barra') barra: string;
  @Output() refreshComponentes: EventEmitter<any> = new EventEmitter();

  constructor(
    // public dashboardDadosService: DashboardDadosService,
    public globalService: GlobalService
  ) {super();
 }

  ngOnInit() {
    if (this.barra == 'determinate')
      this.contador();
  }
  
  contador() {
    this.observer = Observable.timer(0, 20).takeUntil(this.unsubscribe).subscribe(t=> {
      this.percent = Number((0.1 * t).toFixed(2));

      if (t == 1000)
        this.reset();
    });
  }
  reset() {
    this.observer.unsubscribe();
    this.percent = 0;
    this.refreshComponentes.emit();
    this.observer = Observable.timer(1000).takeUntil(this.unsubscribe).subscribe(t => {
      this.contador();
    })    
  }
}
