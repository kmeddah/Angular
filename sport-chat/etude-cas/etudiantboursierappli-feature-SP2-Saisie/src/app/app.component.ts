import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CctSaveDataService } from '@cnaf/cnaf-commons-teleproc';
import { filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EtudiantBoursierService } from './shared/services/etudiantboursier.service';
import { InformationsDossier } from './shared/models/informations-dossier';

/**
 * Déclaration du pageReady
 */
declare var pageReady: any;

/**
 * Component global
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Listes des étapes
   */
  steps = ['SAISIE', 'RECAPITULATIF', 'FIN'];
  /**
   * Etape Active
   */
  stepActive: string;

  /**
   * Constructeur
   */
  constructor(
    private router : Router,
    public etudiantBoursierService : EtudiantBoursierService,
    private readonly cctSaveDataService: CctSaveDataService
  ) {} 


  // Objet contenant les données récupérées du service InformationsDossier
  public informationsDossier : InformationsDossier;

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.informationsDossier;

    this.etudiantBoursierService.getInformationsDossier().subscribe(
      (informationsDossier: InformationsDossier) => { 
        this.informationsDossier = informationsDossier;
        console.log("this.informationsDossier.responsable : ", this.informationsDossier.responsable);
        console.log("this.informationsDossier.conjoint : ", this.informationsDossier.conjoint);
        if ( (this.informationsDossier) && (this.informationsDossier.eligible) ) {
          //this.informationsDossier._isResponsableEBO
          //this.informationsDossier._isConjointEBO = this.informationsDossier.conjoint
          this.informationsDossier._isCoupleEBO = (this.informationsDossier._isConjointEBO && this.informationsDossier._isResponsableEBO);
          this.cctSaveDataService.setCctData(informationsDossier);
          this.router.navigateByUrl('saisie/0');

        } else {
          this.router.navigateByUrl('nonEligibilite');
        }
      },
      error => {
        // TODO INCIDENT TECHNIQUE
        console.log("INCIDENT TECHNIQUE");
      }
    );

  }
  
  onActivate(componentReference: { stepActive: string }) {
    this.stepActive = componentReference.stepActive;
  }

}
