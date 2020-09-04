import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CctSaveDataService, CctSaveSaisieService, CctDateService } from '@cnaf/cnaf-commons-teleproc';
import { InformationsDossier } from '../shared/models/informations-dossier';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {

  // Formulaire de la page
  pageRecapForm : FormGroup;
  
  // Etape active
  public stepActive = 'RECAPITULATIF';
  
  public dataStorageResp = {};
  public dataStorageConjoint = {};
    
  public conjoint;
  public isSubmitted: boolean;

  public informationsDossier : InformationsDossier;

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private readonly cctSaveDataService: CctSaveDataService,
    private readonly cctSaveSaisieService: CctSaveSaisieService,
    private readonly cctDateService: CctDateService
  ) { }

  ngOnInit() {
  
    // Le composant renvoi un msg en rouge
    this.isSubmitted = false;
    
    // Récupération des infos du dossier
    this.informationsDossier = this.cctSaveDataService.getCctData();

    // récupération des données du responsable
    if (this.cctSaveSaisieService.getPageFromListHistoriqueByID('saisie/0')) {
      this.dataStorageResp = this.cctSaveSaisieService.getPageFromListHistoriqueByID('saisie/0').data;
    }
    
    // récupération des données du conjoint
    if (this.cctSaveSaisieService.getPageFromListHistoriqueByID('saisie/1')) {
      this.dataStorageConjoint = this.cctSaveSaisieService.getPageFromListHistoriqueByID('saisie/1').data;
    }
    
    // formulaire de la page 
    this.pageRecapForm = this.fb.group({
      checkConditions: [false]
    });

  }

  clickRetourPageSaisieResponsable() {
    this.router.navigate(['/saisie/0']);
  }

  clickRetourPageSaisieConjoint() {
    this.router.navigate(['/saisie/1']);
  }

  clickValider() {
    this.isSubmitted = true;
    if(this.pageRecapForm.controls.checkConditions.value == false) {
      return;
    }


    this.router.navigate(['/fin']);
  }

}
