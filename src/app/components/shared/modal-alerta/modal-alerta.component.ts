import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../globals/modal.service';

@Component({
  selector: 'modal-alerta',
  templateUrl: './modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.scss']
})
export class ModalAlertaComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
