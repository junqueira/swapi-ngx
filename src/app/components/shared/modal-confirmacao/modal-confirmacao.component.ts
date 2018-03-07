import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../globals/modal.service';

@Component({
  selector: 'modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {
  confirmacao: boolean = false;
  
  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() {
  }
}
