import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GlobalService } from '../../../globals/global.service';
import { ModalService } from '../../../globals/modal.service';

@Component({
  selector: 'modal-token',
  templateUrl: './modal-token.component.html',
  styleUrls: ['./modal-token.component.scss']
})
export class ModalTokenComponent implements OnInit {

  codigo: string = "";

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() {
  }
  confirmarSaque() {
    this.modalService.setToken(this.codigo)
    this.codigo = "";
  }
}
