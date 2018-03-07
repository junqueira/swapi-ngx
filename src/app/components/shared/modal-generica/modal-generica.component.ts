import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../globals/modal.service';

@Component({
  selector: 'modal-generica',
  templateUrl: './modal-generica.component.html',
  styleUrls: ['./modal-generica.component.scss']
})
export class ModalValidacaoComponent implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
