import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { NgCnafCommonsModule } from '@cnaf/ng-cnaf-commons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NoneligibiliteComponent } from './00-noneligibilite/noneligibilite.component';
import { ModalaccueilComponent } from './00-modalaccueil/modalaccueil.component';
import { SaisieComponent } from './01-saisie/saisie.component';
import { RecapitulatifComponent } from './02-recapitulatif/recapitulatif.component';
import { FinComponent } from './03-fin/fin.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { CctSaveSaisieService, CctSaveDataService, CctRecapitulatifModule } from '@cnaf/cnaf-commons-teleproc';
import { ModalquitterComponent } from './04-modalquitter/modalquitter.component';


@NgModule({
  declarations: [
    AppComponent,
    NoneligibiliteComponent,
    ModalaccueilComponent,
    SaisieComponent,
    RecapitulatifComponent,
    FinComponent,
    ModalquitterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgCnafCommonsModule,
    BrowserAnimationsModule,
    PopoverModule.forRoot(),
    ButtonsModule.forRoot(),
    CctRecapitulatifModule
  ],
  entryComponents: [   
    ModalaccueilComponent   
  ],
  providers: [
    BsModalRef,
    {
      provide: APP_BASE_HREF,
      useValue: ''
    }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private readonly cctSaveSaisieService: CctSaveSaisieService,
    private readonly cctSaveDataService: CctSaveDataService) {
    this.cctSaveSaisieService.cleanAll();
    this.cctSaveDataService.cleanAll();
  }
}
