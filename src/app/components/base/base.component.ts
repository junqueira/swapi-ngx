import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrors } from '../../errors/http-errors';
import { ErrorGenerico } from '../../models/error-generico';


export class BaseComponent implements OnInit, OnDestroy {
  public unsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public httpErrors?: HttpErrors
  ) { }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    this.unsubscribe.unsubscribe();
  }
}