import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformationsDossier } from '../models/informations-dossier';
import { Observable, of } from 'rxjs';

const bouchonActif = true;
const informationsDossierBouchon : InformationsDossier = {
    eligible: true,
    responsable: {
        qualite: 'MR',
        nom: 'lottin',
        prenom: 'steven'
    },
    conjoint: {
        qualite: 'mme',
        nom: 'laslande',
        prenom: 'charlotte'
    },
    _isResponsableEBO: true,
    _isConjointEBO: true,
    _isCoupleEBO: true
}

@Injectable({
    providedIn: 'root'
})

export class EtudiantBoursierService {
    private readonly informationsDossierUrl = '/api/etudiantboursierfront/v1/informationsdossier';

    constructor(private readonly http: HttpClient) {}
    
    /* public getEligibilite() : Observable<Eligibilite>  {
        if (bouchonActif) {
            return of(eligibiliteBouchon);
        } else {
            return this.http.get<Eligibilite>(`${this.eligibiliteUrl}`).pipe();
        }
    } */

    public getInformationsDossier() : Observable<InformationsDossier> {
        if (bouchonActif) {
            return of(informationsDossierBouchon);
        } else {
            // Traitement pour faciliter la manitpulation
            return this.http.get<InformationsDossier>(`${this.informationsDossierUrl}`).pipe(); // .pipe() ???
        }
    }

}
