import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modalaccueil',
  templateUrl: './modalaccueil.component.html',
  styleUrls: ['./modalaccueil.component.css']
})
export class ModalaccueilComponent implements OnInit {

    constructor(
        private bsModalRef: BsModalRef,
    ) {}

    ngOnInit() {
    }

    confirm() {
        // TODO
        this.close();
    }

    close() {
        // TODO
        this.bsModalRef.hide();
    }
}