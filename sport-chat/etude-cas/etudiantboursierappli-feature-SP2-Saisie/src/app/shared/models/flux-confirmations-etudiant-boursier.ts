/**
 * http://swagger.intra.cnaf/showSwagger.html?url=http://swagger.intra.cnaf/ui/services/developpement/back/mbc-0360.1001010.yaml 
 /dossier/{organisme}_{numero_dossier}/personnes/messieurs_mesdames/{numero_personne}/confirmations_etudiant_boursier
 *
 *  A noter qu'une donnée alphanumérique non renseignée doit être initialisée à un espace, 
 *  tandis qu'une donnée numérique non renseignée doit être initialisée à un '0'.
 *  Dates au format AAAAMMJJ
 * 
 * 
 * code retour pssible :
 * 200 => ok pour mode injection
 * 204 => ok pour mode liquidation automatique
 * 400 => requête mal formatée
 * 500 => Erreur interne
 * 
 */
export interface FluxConfirmationsEtudiantBoursier {
    // donnée technique standard dédiée à l'entête de la base tampon (code département CAF suivi du rang et d'un espace)
    num_organisme: number,                          // 4 caractères alphanumériques     Code organisme CAF                  Obligatoire

    num_dossier: number,                            // 7 caractères alphanumériques     Matricule dossier                   Obligatoire   
    num_personne: number,                           //                                                                      Obligatoire
    demarche?: string,                              // context global de l'appel '', 'DEMANDE AL' ou 'AFFILIATION'          Facultatif
    type_traitement: string,                        // "auto" ou "tech"
    maj_confirmation_ebo: {  // json de l'ebo
        enteteLiquidationAuto: {
            dateCreation: string,                   // 8 caractères numériques          Date création ? date du jour        Obligatoire
            heureCreation: string,
            rangCreation: 0
        },
        partieCommuneLiquidationAuto: {
            dateTraitementPiece: string,
            heureTraitementPiece: string,
            codeBarre: string
        },
        identifiantFonctionnel: {
            typePersonne: string,
            nomContact: string,
            prenomContact: string,
            dateNaissance: string,
            rangNaissance: 0
        },
        confirmationEtudiantBoursier: {
            dateDebutConfirmationEtudiantBoursier: string,
            dateFinConfirmationEtudiantBoursier: string
        }
    }
}