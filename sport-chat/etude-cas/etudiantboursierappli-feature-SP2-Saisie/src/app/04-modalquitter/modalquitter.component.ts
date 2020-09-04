// import { Component, OnInit } from '@angular/core';
// import { BsModalRef } from 'ngx-bootstrap/modal';

import { Component, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modalquitter',
  templateUrl: './modalquitter.component.html',
  styleUrls: ['./modalquitter.component.css']
})
export class ModalquitterComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  close() {
    this.modalRef.hide();
}

}
