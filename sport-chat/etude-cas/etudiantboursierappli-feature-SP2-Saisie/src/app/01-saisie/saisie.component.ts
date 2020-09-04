import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CctSaveDataService, CctSaveSaisieService, CctDateService } from '@cnaf/cnaf-commons-teleproc';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalaccueilComponent } from '../00-modalaccueil/modalaccueil.component';
import { EtudiantBoursierService } from '../shared/services/etudiantboursier.service';
import { InformationsDossier } from '../shared/models/informations-dossier';

@Component({
  selector: 'app-saisie',
  templateUrl: './saisie.component.html',
  styleUrls: ['./saisie.component.css']
})

export class SaisieComponent implements OnInit {

  // Formulaire de la page
  pageSaisieForm : FormGroup;

  // Etape active
  public stepActive = 'SAISIE';

  // Sauvegarde
  public dataStorage;

  public informationsDossier : InformationsDossier;
  public personne = {'qualite': '', 'prenom': '', 'nom': ''};
  public index;
  
  modalRef: BsModalRef;
  
  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder,
    private readonly cctSaveDataService: CctSaveDataService,
    private readonly cctSaveSaisieService: CctSaveSaisieService,
    private readonly cctDateService: CctDateService,
    private modalService: BsModalService,
    private etudiantBoursierService: EtudiantBoursierService
  ) {}
 
  afficherModalAccueil() {
    this.modalRef = this.modalService.show(ModalaccueilComponent);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.initPage(params);
    });
  }

  /**
   * Init de la page 
   * @param params object Params.
   */
  private initPage(params: Params): void {
    this.cleanPage();
    this.activatedRoute.params.subscribe (
      params => {
        console.log("params :", params);
        this.index = params['index'];
      }
    );

    // Récupération des infos du dossier
    if (!this.informationsDossier)
      this.informationsDossier = this.cctSaveDataService.getCctData();

    // Affichage des informations de l'allocataire ou du conjoint
    this.alimenterPersonne();
        
    // récupération des données saisies
    if (this.cctSaveSaisieService.getPageFromListHistoriqueByID(`${'saisie'}/${this.index}`)) {
      this.dataStorage = this.cctSaveSaisieService.getPageFromListHistoriqueByID(`${'saisie'}/${this.index}`).data;
    } else {
      // Affichage de la modal accueil uniquement au premier accès
      // TODO le problème persiste si l'on autorise la fonction 'F5'
      if (this.index == 0)
        this.afficherModalAccueil();
    }
    
    // formulaire de la page 
    this.pageSaisieForm = this.fb.group({
      isBeneficiaireBourse: [this.dataStorage ? this.dataStorage.isBeneficiaireBourse : null, Validators.required],
      organismePayeur: this.fb.group({      
        nom: [this.dataStorage && this.dataStorage.organismePayeur ? this.dataStorage.organismePayeur.nom : null, Validators.required],
        adresse: [this.dataStorage && this.dataStorage.organismePayeur ? this.dataStorage.organismePayeur.adresse : null, Validators.required]
      }),
    });

    // Si on revient sur la page et que le bouton "NON" avait été cliqué
    if ( (this.dataStorage != null) && (this.dataStorage.isBeneficiaireBourse != null) && this.dataStorage.isBeneficiaireBourse == "non") {
      this.disableOrganisme();
    }

  }

  /**
   * getter pour faciliter l'acès aux champs du formulaire
   */
  get f() { return this.pageSaisieForm.controls; }

  /**
   * Inititialisation 
   */
  cleanPage() {
    this.index = -1;
    this.dataStorage = undefined;
    this.personne.qualite ='';
    this.personne.prenom = '';
    this.personne.nom = '';
  }

  enableOrganisme() {
    this.pageSaisieForm.controls['organismePayeur'].enable();
  }
  
  disableOrganisme() {
    this.pageSaisieForm.controls['organismePayeur'].setValue({'nom': '', 'adresse': ''});
    this.pageSaisieForm.controls['organismePayeur'].disable();
  }

  /**
   * On alimente les informations sur la personne pour personnaliser la page
   */
  alimenterPersonne() {

    if ( (this.index == 0) && (this.informationsDossier._isResponsableEBO) ) {
      this.personne.qualite = this.informationsDossier.responsable.qualite;
      this.personne.nom = this.informationsDossier.responsable.nom;
      this.personne.prenom = this.informationsDossier.responsable.prenom;

    } else {
      this.personne.qualite = this.informationsDossier.conjoint.qualite;
      this.personne.nom = this.informationsDossier.conjoint.nom;
      this.personne.prenom = this.informationsDossier.conjoint.prenom;
    }
  }

  clickPrecedent() {
    this.cctSaveSaisieService.cleanListSaisieByID(`${'saisie'}/${this.index}`);
    this.index--;
    this.router.navigateByUrl(`${'saisie'}/${this.index}`);
  }

  clickSuivant() {
    // Si le formunlaire contient des erreurs
    // on met les champs à "touched" pour forcer l'affichage des messages d'erreurs
    if (this.pageSaisieForm.invalid) {
      if (this.pageSaisieForm.controls.isBeneficiaireBourse.untouched) {
        this.pageSaisieForm.controls.isBeneficiaireBourse.markAsTouched();
      } else {
        this.pageSaisieForm.markAllAsTouched();
      }

      return;
    }

    // Sauvegarde de la saisie
    this.cctSaveSaisieService.addPage(this.pageSaisieForm.value, `${'saisie'}/${this.index}`,  this.stepActive);

    // Navigation
    if ( (this.informationsDossier._isCoupleEBO) && (this.index == 0) ) {
      this.index++;
      this.router.navigateByUrl(`${'saisie'}/${this.index}`);
    } else {
      this.router.navigateByUrl('recapitulatif');
    }
  }

  clickQuitter() {
    this.router.navigateByUrl('modalQuitter');
  }
}