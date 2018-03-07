import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../../globals/modal.service';

@Component({
  selector: 'modal-erro',
  templateUrl: './modal-erro.component.html',
  styleUrls: ['./modal-erro.component.scss']
})
export class ModalErroComponent implements OnInit {
  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

}
